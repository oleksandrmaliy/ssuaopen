import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MAX_VIDEO_SIZE = 52428800; // 50MB
const SUPPORTED_VIDEO_FORMATS = [
  'video/mp4',
  'video/avi',
  'video/mkv',
  'video/quicktime',
]; // MOV = quicktime

const userValues = {
  week: '',
  file: '',
  text: '',
};

const userSchema = Yup.object().shape({
  week: Yup.string().required('Оберіть тиждень'),
  file: Yup.mixed()
    .required('Відеофайл обов’язковий')
    .test('is-valid-size', 'Max allowed size is 50MB', (value) => {
      console.log(value);
      console.log(value.name);
      console.log(value[0].size);
      value && value.size <= MAX_VIDEO_SIZE;
    })

    // .test('fileSize', 'Файл завеликий (макс. 50MB)', (value) => {
    //   console.log(value);
    //   console.log(value.type);
    //   console.log(value.size);
    //   return value instanceof File && value.size <= MAX_VIDEO_SIZE;
    // })
    .test(
      'fileType',
      'Непідтримуваний формат (дозволено MP4, AVI, MKV, MOV)',
      (value) => {
        if (!value || !(value instanceof File)) return true;
        return SUPPORTED_VIDEO_FORMATS.includes(value.type);
      },
    ),
  text: Yup.string()
    .min(6, 'Короткий!')
    .max(500, 'Довгий!')
    .required("Обов'язкове поле"),
});

const ErrorToast = ({ children }) => {
  return <h3>{children}</h3>;
};

const Participation = ({ className }) => {
  const weekId = useId();
  const fileId = useId();
  const textAreaId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <div className={className}>
      <h3>Участь у грі</h3>
      <Formik
        initialValues={userValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form>
          <div>
            <label htmlFor={weekId}>Тиждень</label>
            <Field type="week" name="week" id={weekId} placeholder="week" />
            <ErrorMessage name="week" component={ErrorToast} />
          </div>

          <div>
            <label htmlFor={fileId}>Відеофайл</label>
            <Field
              type="file"
              accept="video/*"
              name="file"
              id={fileId}
              placeholder="videofile"
            />
            <ErrorMessage name="file" component={ErrorToast} />
          </div>

          <div>
            <label htmlFor={textAreaId}>Про себе</label>
            <Field
              as="textarea"
              rows="5"
              wrap="hard"
              name="text"
              id={textAreaId}
              placeholder="text"
            />
            <ErrorMessage name="text" component={ErrorToast} />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Participation;
