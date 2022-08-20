import * as yup from 'yup';

export const EditTech = yup.object({
  status: yup.string().required('Campo Obrigatório'),
});
