import * as yup from 'yup';

export const userLogin = yup.object({
  email: yup
    .string()
    .email('Formato de email inválido')
    .required('Email obrigatório'),
  password: yup
    .string()
    .min(8, 'No mínimo 8 caracteres')
    .required('Senha obrigatória'),
});
