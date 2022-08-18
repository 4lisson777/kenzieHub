import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(true);
  const [tech, setTech] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@TOKEN');

      if (token) {
        try {
          api.defaults.headers.Authorization = `Bearer ${token}`;

          const { data } = await api.get('/profile');

          setUser(data);
        } catch (error) {
          console.error(error);
          handleLogout();
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [tech]);

  const createUser = (data) => {
    api
      .post('users/', data)
      .then((response) => {
        toast.success('Usuário criado com sucesso!');
        navigate('/login', { replace: true });
      })
      .catch(({ response: { data } }) => toast.error(data.message));
  };

  const loginUser = (data) => {
    setLoading(true);
    api
      .post('/sessions', data)
      .then(({ data }) => {
        toast.success('Logado com sucesso!');
        localStorage.setItem('@TOKEN', data.token);
        localStorage.setItem('@USERID', data.user.id);
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        setUser(data.user);
        setLoading(false);
        navigate('/dashboard', { replace: true });
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    navigate('/login', { replace: true });
  };

  const createTech = (data) => {
    setLoading(true);
    const token = localStorage.getItem('@TOKEN');
    api.defaults.headers.Authorization = `Bearer ${token}`;

    api
      .post('/users/techs', data)
      .then((response) => {
        toast.success('Tecnologia Adicionada!');
        setTech(!tech);
        setLoading(false);
        setAddModal(false);
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  const editTech = (data) => {
    setLoading(true);
    const token = localStorage.getItem('@TOKEN');
    api.defaults.headers.Authorization = `Bearer ${token}`;

    api
      .post('/users/techs', data)
      .then((response) => {
        toast.success('Tecnologia Editada!');
        setTech(!tech);
        setLoading(false);
        setEditModal(false);
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  const deleteTech = (data) => {
    setLoading(true);
    const token = localStorage.getItem('@TOKEN');
    api.defaults.headers.Authorization = `Bearer ${token}`;

    api
      .post('/users/techs', data)
      .then((response) => {
        toast.success('Tecnologia Deletada!');
        setTech(!tech);
        setLoading(false);
        setEditModal(false);
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        loading,
        loginUser,
        setUser,
        user,
        handleLogout,
        createTech,
        addModal,
        setAddModal,
        editModal,
        setEditModal,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
