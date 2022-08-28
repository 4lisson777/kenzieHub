import * as yup from 'yup';

export const AddTech = yup.object({
  title: yup.string().required('Campo Obrigatório'),
});
