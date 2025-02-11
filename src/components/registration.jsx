import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const userValues = {
  nickname: '',
  email: '',
  password: '',
  cfmPassword: '',
};

const userSchema = Yup.object().shape({
  nickname: Yup.string()
    .min(2, 'Коротке!')
    .max(20, 'Довге!')
    .required("Обов'язкове поле"),
  email: Yup.string().email('Має бути дійсним!').required("Обов'язкове поле"),
  password: Yup.string()
    .min(6, 'Короткий!')
    .max(20, 'Довгий!')
    .required("Обов'язкове поле"),
  cfmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі мають співпадати!')
    .required("Обов'язкове поле"),
});

const ErrorToast = ({ children }) => {
  return <h3>{children}</h3>;
};

const Registration = ({ className }) => {
  const nickId = useId();
  const emailId = useId();
  const passwordId = useId();
  const cfmPasswordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    const { cfmPassword, ...dataToSend } = values;
    console.log(cfmPassword);
    console.log(dataToSend);
    actions.resetForm();
  };

  return (
    <div className={className}>
      <h3>Реєстрація</h3>
      <Formik
        initialValues={userValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form>
          <div>
            <label htmlFor={nickId}>Псевдонім</label>
            <Field
              type="text"
              name="nickname"
              id={nickId}
              placeholder="Псевдонім"
            />
            <ErrorMessage name="nickname" component={ErrorToast} />
          </div>

          <div>
            <label htmlFor={emailId}>Електронна пошта</label>
            <Field type="email" name="email" id={emailId} placeholder="Емейл" />
            <ErrorMessage name="email" component={ErrorToast} />
          </div>

          <div>
            <label htmlFor={passwordId}>Пароль</label>
            <Field
              type="password"
              name="password"
              id={passwordId}
              placeholder="Пароль"
            />
            <ErrorMessage name="password" component={ErrorToast} />
          </div>

          <div>
            <label htmlFor={cfmPasswordId}>Пароль</label>
            <Field
              type="password"
              name="cfmPassword"
              id={cfmPasswordId}
              placeholder="Пароль"
            />
            <ErrorMessage name="cfmPassword" component={ErrorToast} />
          </div>

          <button type="submit">Зареєструватися</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
