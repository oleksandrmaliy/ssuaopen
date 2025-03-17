// import { useId } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

import Title from '../components/title.jsx';
import Registration from '../components/registration';
import Login from '../components/login';
import Participation from '../components/participation';

// const userValues = {
//   nickname: '',
//   email: '',
//   password: '',
//   cfmPassword: '',
// };

// const userSchema = Yup.object().shape({
//   nickname: Yup.string()
//     .min(2, 'Коротке!')
//     .max(20, 'Довге!')
//     .required("Обов'язкове поле"),
//   email: Yup.string().email('Має бути дійсним!').required("Обов'язкове поле"),
//   password: Yup.string()
//     .min(6, 'Короткий!')
//     .max(20, 'Довгий!')
//     .required("Обов'язкове поле"),
//   cfmPassword: Yup.string()
//     .oneOf([Yup.ref('password')], 'Паролі мають співпадати!')
//     .required("Обов'язкове поле"),
// });

// const ErrorToast = ({ children }) => {
//   return <h3>{children}</h3>;
// };

const Forth = () => {
  return (
    <div className="bg-red-200 border-4 border-red-500">
      <Title>Registration page</Title>
      <Registration className="mb-4" />
      <Login className="mb-4" />
      <Participation className="mb-4" />
    </div>
  );
};

export default Forth;
