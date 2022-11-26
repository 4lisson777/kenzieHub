import { createContext, useEffect, useState, ReactNode } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';

interface IContextProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechs[];
  works: IWorks[];
  created_at: Date;
  updated_at: Date;
  avatar_url: string;
}

interface IResponseData {
  token: string;
  user: IUser;
}

interface IResponseError {
  response: {
    data: {
      message: string;
    };
  };
}

type IResponseCreateUser = Omit<IUser, 'techs' | 'works'>;

interface ITechs {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

interface IWorks {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

interface IUserContext {
  createUser: (data: FieldValues) => void;
  loading: boolean;
  loginUser: (data: FieldValues) => void;
  user: IUser;
  handleLogout: () => void;
  createTech: (data: FieldValues) => void;
  addModal: boolean;
  editModal: boolean;
  editTech: (data: FieldValues) => void;
  deleteTech: (id: string) => void;
  handleEditModal: (idItem: string) => void;
  handleAddModal: () => void;
  id: string;
  techs: ITechs[];
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const ContextProvider = ({ children }: IContextProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [techs, setTechs] = useState<ITechs[]>([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@TOKEN');

      if(token){
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const { data } = await api.get<IUser>('/profile');
        setUser(data);
        setTechs(data.techs);
      }else{
        handleLogout();
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const createUser = (data: FieldValues) => {
    api
      .post<IResponseCreateUser>('users/', data)
      .then(({ data }) => {
        toast.success('Usuário criado com sucesso!');
        navigate('/login', { replace: true });
      })
      .catch(({ response: { data } }: IResponseError) =>
        toast.error(data.message),
      );
  };

  const loginUser = (data: FieldValues) => {
    setLoading(true);
    api
      .post<IResponseData>('/sessions', data)
      .then(({ data }) => {
        toast.success('Logado com sucesso!');
        localStorage.setItem('@TOKEN', data.token);
        localStorage.setItem('@USERID', data.user.id);
        api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
        setUser(data.user);
        setLoading(false);
        setTechs(data.user.techs);
        navigate('/dashboard', { replace: true });
      })
      .catch(({ response: { data } }: IResponseError) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    navigate('/login', { replace: true });
  };

  const createTech = (data: FieldValues) => {
    setLoading(true);
    const token = localStorage.getItem('@TOKEN');
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    api
      .post<ITechs>('/users/techs', data)
      .then(({ data }) => {
        toast.success('Tecnologia Adicionada!');
        setTechs([...techs, data]);
        setLoading(false);
        setAddModal(false);
      })
      .catch(({ response: { data } }: IResponseError) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  const editTech = (data: FieldValues) => {
    setLoading(true);
    const token = localStorage.getItem('@TOKEN');
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    api
      .put<ITechs>(`/users/techs/${id}`, data)
      .then(({ data }) => {
        toast.success('Tecnologia Editada!');
        setTechs([...techs.filter((tech) => tech.id !== id), data]);
        setLoading(false);
        setEditModal(false);
      })
      .catch(({ response: { data } }: IResponseError) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  const deleteTech = (id: string) => {
    setLoading(true);
    const token = localStorage.getItem('@TOKEN');
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    api
      .delete(`/users/techs/${id}`)
      .then((response) => {
        toast.success('Tecnologia Deletada!');
        setTechs(techs.filter((tech) => tech.id !== id));
        setLoading(false);
        setEditModal(false);
      })
      .catch(({ response: { data } }: IResponseError) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  const handleEditModal = (idItem: string) => {
    setId(idItem);
    setEditModal(!editModal);
  };

  const handleAddModal = () => {
    setAddModal(!addModal);
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        loading,
        loginUser,
        user,
        handleLogout,
        createTech,
        addModal,
        editModal,
        editTech,
        deleteTech,
        handleEditModal,
        handleAddModal,
        id,
        techs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
