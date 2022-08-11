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
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [visibility, setVisibility] = useState('password');
  const [focus, setFocus] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userLogin) });

  const loginUser = (data) => {
    setLoading(true);
    api
      .post('/sessions', data)
      .then(({ data }) => {
        toast.success('Logado com sucesso!');
        localStorage.setItem('@TOKEN', data.token);
        localStorage.setItem('@USERID', data.user.id);
        setUser(data.user);
        setLoading(false);
        navigate('/dashboard', { replace: true });
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
        setLoading(false);
      });
  };

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
