import { useId, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MAX_VIDEO_SIZE = 52428800; // 50MB
const SUPPORTED_VIDEO_FORMATS = [
  'video/mp4',
  'video/avi',
  'video/mkv',
  'video/quicktime',
];

const userValues = {
  week: '',
  video: null,
  text: '',
};

const userSchema = Yup.object().shape({
  week: Yup.string().required('Оберіть тиждень'),
  video: Yup.mixed()
    .required('Відеофайл обов’язковий')
    .test('is-valid-size', 'Файл завеликий (макс. 50MB)', (value) => {
      return value && value.size <= MAX_VIDEO_SIZE;
    })
    .test(
      'fileType',
      'Непідтримуваний формат (дозволено MP4, AVI, MKV, MOV)',
      (value) => {
        return value && SUPPORTED_VIDEO_FORMATS.includes(value.type);
      },
    ),
  text: Yup.string()
    .min(6, 'Короткий!')
    .max(500, 'Довгий!')
    .required("Обов'язкове поле"),
});

const ErrorToast = ({ children }) => {
  return <h3 style={{ color: 'red' }}>{children}</h3>;
};

const Participation = ({ className }) => {
  const weekId = useId();
  const fileId = useId();
  const textAreaId = useId();

 
  const videoInputRef = useRef(null); // Створення рефу для input[type="file"]

  const handleSubmit = (values, actions) => {
    console.log('Форма відправлена:', values);
    console.log(values.video);
    console.log(values.video.size);
    console.log(values.video.type);

    actions.resetForm();

    if (videoInputRef.current) {
      videoInputRef.current.value = ''; // очищаємо значення файлу
    }
  };

  return (
    <div className={className}>
      <h3>Участь у чемпіонаті</h3>
      <Formik
        initialValues={userValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor={weekId}>Тиждень</label>
              <Field
                type="week"
                name="week"
                id={weekId}
                placeholder="Тиждень"
              />
              <ErrorMessage name="week" component={ErrorToast} />
            </div>
         

            <div>
              <label htmlFor={fileId}>Відеофайл</label>
              <input
                ref={videoInputRef} // Прив'язуємо реф
                id={fileId}
                name="video"
                type="file"
                accept="video/*"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0];
                  setFieldValue('video', file);
                }}
              />
              <ErrorMessage name="video" component={ErrorToast} />
            </div>

            <div>
              <label htmlFor={textAreaId}>Про себе</label>
              <Field
                as="textarea"
                rows="5"
                cols="50"
                wrap="hard"
                name="text"
                id={textAreaId}
                placeholder="Про себе"
              />
              <ErrorMessage name="text" component={ErrorToast} />
            </div>

            <button type="submit">Надіслати</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Participation;
