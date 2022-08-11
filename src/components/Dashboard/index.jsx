import logoImg from '../../assets/Logo.png';
import { Navbar, Botao, Header, Main } from './styles';
import { useNavigate, Navigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    navigate('/login', { replace: true });
  };

  return (
    <>
      {!user && <Navigate to="/login" replace={true} />}
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
        <div>
          <h2>Que pena! Estamos em desenvolvimento :&#40;</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </Main>
    </>
  );
};

export default Dashboard;
