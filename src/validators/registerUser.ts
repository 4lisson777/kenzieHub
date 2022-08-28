import * as yup from 'yup';

export const registerUser = yup.object({
  name: yup.string().required('Obrigatório'),
  email: yup
    .string()
    .email('Formato de email inválido')
    .required('Email obrigatório'),
  password: yup
    .string()
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      'Sua senha precisa ter no mínimo 8 caracteres, letras, números e ao menos um símbolo',
    )
    .required('Senha obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Senha não conferem'),
  bio: yup.string().required('Obrigatório'),
  contact: yup.string().required('Obrigatório'),
  course_module: yup.string().required('Obrigatório'),
});
