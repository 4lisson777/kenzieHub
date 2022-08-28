import { Container, Select, Form, Buttons, Close } from './styles';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditTech } from '../../validators/EditTech';
import { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { IFormData } from '../ModalAdd';

const ModalEditDel = () => {
  const { register, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(EditTech),
  });

  const { id, editModal, handleEditModal, editTech, deleteTech, techs } =
    useContext(UserContext);

  const [value, setValue] = useState('');

  return editModal ? (
    <Container>
      <div className="modal-box">
        <div>
          <h1>Detalhes da Tecnologia</h1>
          <Close onClick={() => handleEditModal(id)}>
            <MdClose />
          </Close>
        </div>
        <Form onSubmit={handleSubmit(editTech)}>
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            id="title"
            placeholder="Ex: Typescript"
            value={techs.find((tech) => tech.id === id)?.title}
            disabled
          />

          <label htmlFor="status">Selecionar Status</label>
          <Select
            id="status"
            {...register('status', {
              onChange: (e) => setValue(e.target.value),
            })}
            defaultValue={techs.find((tech) => tech.id === id)?.status}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <Buttons value={value}>
            <button type="submit">Salvar Alterações</button>
            <button onClick={() => deleteTech(id)}>Excluir</button>
          </Buttons>
        </Form>
      </div>
    </Container>
  ) : (
    <></>
  );
};

export default ModalEditDel;
