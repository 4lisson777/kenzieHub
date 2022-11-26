import logoImg from '../../assets/Logo.png';
import { Navbar, Botao, Header, Main } from './styles';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import Loading from '../../components/Loading';
import ModalAdd from '../../components/ModalAdd';
import ModalEditDel from '../../components/ModalEditDel';

const Dashboard = () => {
  const {
    handleLogout,
    user,
    loading,
    handleAddModal,
    handleEditModal,
    techs,
  } = useContext(UserContext);

  if (loading) {
    return <Loading />;
  }

  if(!user){
    return <Navigate to="/login" replace={true} />
  }

  return (
    <>
      <Navbar>
        <img src={logoImg} alt="Logo KenzieHub" />
        <Botao onClick={handleLogout}>Sair</Botao>
      </Navbar>
      <Header>
        <div>
          <h1>{`Olá, ${user.name}`}</h1>
          <p>{`${user.course_module} Módulo`}</p>
        </div>
      </Header>
      <Main>
        <div className="addTech">
          <h2>Tecnologias</h2>
          <button onClick={() => handleAddModal()}>+</button>
        </div>
        <ul>
          {techs.length === 0 ? (
            <p>Nenhuma Tech cadastrada aqui...</p>
          ) : (
            techs.map((tech) => (
              <li key={tech.id} onClick={() => handleEditModal(tech.id)}>
                <span>{tech.title}</span>
                <span>{tech.status}</span>
              </li>
            ))
          )}
        </ul>
      </Main>
      <ModalAdd />
      <ModalEditDel />
    </>
  );
};

export default Dashboard;
