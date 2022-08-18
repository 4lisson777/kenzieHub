import { Container, Select, Form, ErrorMsg, Edit } from './styles';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddTech } from '../../validators/addTech';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

const ModalEditDel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddTech) });

  const { editModal, setEditModal, editTech, deleteTech } =
    useContext(UserContext);

  return (
    editModal && (
      <Container>
        <div className="modal-box">
          <div>
            <h1>Detalhes da Tecnologia</h1>
            <button onClick={() => setEditModal(false)}>
              <MdClose />
            </button>
          </div>
          <Form onSubmit={handleSubmit(editTech)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="title"
              placeholder="Ex: Typescript"
              {...register('title')}
            />
            <ErrorMsg>{errors.title?.message}</ErrorMsg>

            <label htmlFor="status">Selecionar Status</label>
            <Select
              id="status"
              {...register('status')}
              defaultValue={{ label: 'Iniciante', value: 'Iniciante' }}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <div className="editTech">
              <Edit errors={errors} type="submit">
                Salvar alterações
              </Edit>
            </div>
          </Form>
        </div>
      </Container>
    )
  );
};

export default ModalEditDel;
