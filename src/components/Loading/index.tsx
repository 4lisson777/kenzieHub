import { Container } from './styles';
import logo from '../../assets/sharingan.ico';

const Loading = () => {
  return (
    <Container>
      <img className="loading-logo" src={logo} alt="logo" />
    </Container>
  );
};

export default Loading;
