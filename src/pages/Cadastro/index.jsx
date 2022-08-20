import { Navbar, Botao, Container, Form, Select, ErrorMsg } from './styles';
import logoImg from '../../assets/Logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerUser } from '../../validators/registerUser';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

const Cadastro = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerUser) });

  return (
    <>
      <Navbar>
        <img src={logoImg} alt="KenzieHub" />
        <Botao to="/login">Voltar</Botao>
      </Navbar>
      <Container>
        <main>
          <h1>Crie sua conta</h1>
          <p>Rápido e grátis, vamos nessa</p>
          <Form onSubmit={handleSubmit(createUser)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register('name')}
            />
            <ErrorMsg>{errors.name?.message}</ErrorMsg>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Digite aqui seu email"
              {...register('email')}
            />
            <ErrorMsg>{errors.email?.message}</ErrorMsg>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register('password')}
            />
            <ErrorMsg>{errors.password?.message}</ErrorMsg>

            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirme sua senha"
              {...register('confirmPassword')}
            />
            <ErrorMsg>{errors.confirmPassword?.message}</ErrorMsg>

            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              {...register('bio')}
            />
            <ErrorMsg>{errors.bio?.message}</ErrorMsg>

            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              id="contact"
              placeholder="Opção de contato"
              {...register('contact')}
            />
            <ErrorMsg>{errors.contact?.message}</ErrorMsg>

            <label htmlFor="modulo">Selecionar módulo</label>
            <Select
              id="modulo"
              defaultValue={{ label: 'Primeiro Módulo', value: 1 }}
              {...register('course_module')}
            >
              <option value="Primeiro">Primeiro Módulo</option>
              <option value="Segundo">Segundo Módulo</option>
              <option value="Terceiro">Terceiro Módulo</option>
              <option value="Quarto">Quarto Módulo</option>
              <option value="Quinto">Quinto Módulo</option>
              <option value="Sexto">Sexto Módulo</option>
            </Select>
            <ErrorMsg>{errors.course_module?.message}</ErrorMsg>

            <button type="submit">Cadastrar</button>
          </Form>
        </main>
      </Container>
    </>
  );
};

export default Cadastro;
