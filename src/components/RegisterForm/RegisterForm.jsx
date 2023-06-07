import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from 'components/ContactForm/Form.styled';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/operations';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  email: Yup.string()
    .min(5, 'must be at least 5 characters long')
    .email('must be a valid email')
    .required('Required field'),
  password: Yup.string()
    .min(8, 'must be at least 8 characters long')
    .required('Required field')
    .typeError("That doesn't look like a password")
    .required('Required field'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if(values.email.trim().length < 4 || values.password.trim().length < 7 || !values.name.trim().length){
  console.log('returned')
      return
    }
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>User name </label>
        <Field name="name" />
        <ErrorMessage name="name" component="span" />
        <label>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="span" />
        <label>Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  );
};
