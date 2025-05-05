import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { postSurfer } from '../redux/operations';
import { useDispatch } from 'react-redux';

// import * as Yup from 'yup';

// const MAX_VIDEO_SIZE = 52428800; // 50MB
// const SUPPORTED_VIDEO_FORMATS = [
//   'video/mp4',
//   'video/avi',
//   'video/mkv',
//   'video/quicktime',
// ];

const userValues = {
  name: '',
  avatar: '',
  score: '',
  week: '',
  date: '',
  file: '',
};

// const userSchema = Yup.object().shape({
//   week: Yup.string().required('Оберіть тиждень'),
//   video: Yup.mixed()
//     .required('Відеофайл обов’язковий')
//     .test('is-valid-size', 'Файл завеликий (макс. 50MB)', (value) => {
//       return value && value.size <= MAX_VIDEO_SIZE;
//     })
//     .test(
//       'fileType',
//       'Непідтримуваний формат (дозволено MP4, AVI, MKV, MOV)',
//       (value) => {
//         return value && SUPPORTED_VIDEO_FORMATS.includes(value.type);
//       },
//     ),
//   text: Yup.string()
//     .min(6, 'Короткий!')
//     .max(500, 'Довгий!')
//     .required("Обов'язкове поле"),
// });

const Participation = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const avatarId = useId();
  const scoreId = useId();
  const weekId = useId();
  const dateId = useId();
  const fileId = useId();

  // const videoInputRef = useRef(null); // Створення рефу для input[type="file"]

  const handleSubmit = (values, actions) => {
    console.log('Форма відправлена - values:', values);
    console.log('Форма відправлена - actions:', actions);
    dispatch(postSurfer(values));

    actions.resetForm();

    // if (videoInputRef.current) {
    //   videoInputRef.current.value = ''; // очищаємо значення файлу
    // }
  };

  return (
    <div className="">
      <h3>Участь у чемпіонаті</h3>
      <Formik
        initialValues={userValues}
        onSubmit={handleSubmit}
        // validationSchema={userSchema}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Ім&apos;я</label>
            <Field type="string" name="name" id={nameId} placeholder="Name" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label htmlFor={avatarId}>Аватар</label>
            <Field
              type="file"
              name="avatar"
              id={avatarId}
              placeholder="Тиждень"
            />
            <ErrorMessage name="avatar" />
          </div>

          <div>
            <label htmlFor={scoreId}>Рахунок</label>
            <Field
              type="number"
              name="score"
              id={scoreId}
              placeholder="Score"
            />
            <ErrorMessage name="score" />
          </div>

          <div>
            <label htmlFor={weekId}>Тиждень</label>
            <Field type="week" name="week" id={weekId} />
            <ErrorMessage name="week" />
          </div>

          <div>
            <label htmlFor={dateId}>Дата участі</label>
            <Field type="date" name="date" id={dateId} />
            <ErrorMessage name="date" />
          </div>

          <div>
            <label htmlFor={fileId}>Файл</label>
            <Field type="file" name="file" id={fileId} placeholder="File" />
            <ErrorMessage name="file" />
          </div>

          <button type="submit">Надіслати</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Participation;
