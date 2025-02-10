import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const userValues = {
  email: '',
  password: '',
};

const userSchema = Yup.object().shape({
  email: Yup.string().email('Має бути дійсним!').required("Обов'язкове поле"),
  password: Yup.string()
    .min(6, 'Короткий!')
    .max(20, 'Довгий!')
    .required("Обов'язкове поле"),
});

const ErrorToast = ({ children }) => {
  return <h3>{children}</h3>;
};

const Login = ({ className }) => {
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={className}>
      <h3>Вхід</h3>
      <Formik
        initialValues={userValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form>
          <div>
            <label htmlFor={emailId}>Електронна пошта</label>
            <Field type="email" name="email" id={emailId} placeholder="email" />
            <ErrorMessage name="email" component={ErrorToast} />
          </div>

          <div>
            <label htmlFor={passwordId}>Пароль</label>
            <Field
              type="password"
              name="password"
              id={passwordId}
              placeholder="password"
            />
            <ErrorMessage name="password" component={ErrorToast} />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
