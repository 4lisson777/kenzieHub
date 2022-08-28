import { Container, Select, Form, ErrorMsg, CadastrarTech } from './styles';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddTech } from '../../validators/addTech';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

export interface IFormData {
  title: string;
  status: string;
}

const ModalAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(AddTech) });

  const { addModal, handleAddModal, createTech } = useContext(UserContext);

  return addModal ? (
    <Container>
      <div className="modal-box">
        <div>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={() => handleAddModal()}>
            <MdClose />
          </button>
        </div>
        <Form onSubmit={handleSubmit(createTech)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="title"
            placeholder="Ex: Typescript"
            {...register('title')}
          />
          <ErrorMsg>{errors.title?.message}</ErrorMsg>

          <label htmlFor="status">Selecionar Status</label>
          <Select id="status" {...register('status')}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <ErrorMsg>{errors.status?.message}</ErrorMsg>

          <CadastrarTech errors={errors} type="submit">
            Cadastrar Tecnologia
          </CadastrarTech>
        </Form>
      </div>
    </Container>
  ) : (
    <></>
  );
};

export default ModalAdd;
