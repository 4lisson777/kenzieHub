import {
  Navbar,
  Container,
  Form,
  Input,
  Entrar,
  Cadastrar,
  ErrorMsg,
} from './styles';
import logoImg from '../../assets/Logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userLogin } from '../../validators/userLogin';
import Loading from '../../components/Loading';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

const Login = () => {
  const { loading, loginUser } = useContext(UserContext);

  const [visibility, setVisibility] = useState('password');
  const [focus, setFocus] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userLogin) });

  return (
    <>
      {loading && <Loading />}
      <Navbar>
        <img src={logoImg} alt="KenzieHub" />
      </Navbar>
      <Container>
        <main>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register('email')} />
            <ErrorMsg>{errors.email?.message}</ErrorMsg>

            <label htmlFor="password">Senha</label>
            <Input focus={focus}>
              <input
                type={visibility}
                id="password"
                {...register('password', {
                  onChange: (e) => setFocus(e.target.value),
                })}
              />
              {visibility === 'password' ? (
                <FaEye className="icon" onClick={() => setVisibility('text')} />
              ) : (
                <FaEyeSlash
                  className="icon-hidden"
                  onClick={() => setVisibility('password')}
                />
              )}
            </Input>
            <ErrorMsg>{errors.password?.message}</ErrorMsg>
            <Entrar errors={errors} type="submit">
              Entrar
            </Entrar>
          </Form>
          <p>Ainda não possui conta?</p>
          <Cadastrar to="/cadastrar">Cadastre-se</Cadastrar>
        </main>
      </Container>
    </>
  );
};

export default Login;
