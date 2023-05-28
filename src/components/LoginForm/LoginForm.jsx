import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from 'components/ContactForm/Form.styled';
import { useDispatch } from 'react-redux';
import { login } from 'API/API.Axios';
// import * as Yup from 'yup';

// const ContactsSchema = Yup.object().shape({
//     name: Yup.string().required('Required field'),
//     password: Yup.string().min(8, 'must be at least 8 characters long').required('Required field')
//       //  .max(12,'this number must be less longer then 12 symbols')
//       .typeError("That doesn't look like a password")
//       .positive("A password can't start with a minus")
//       .integer("A password can't include a decimal point")
//       .required('Required field'),
//   });

export const LoginForm = () => {

    // const { items } = useSelector(selectContacts);
    const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
//       if (
//         items.find(
//           contact => contact.name.toLowerCase() === values.name.toLowerCase()
//         )
//       ) {
//         alert(`${values.name} is already in contacts`);
//         return;
//       }
//       if (items.find(contact => contact.number === values.number)) {
//         alert(`${values.number} is already exist in contacts`);
//         return;
//       }
//       {
//         const newValues = { name: values.name, phone: values.number };
//  }
      dispatch(login(values));
      actions.resetForm();
    };

    return (
    <Formik
      initialValues={{
        email: '',
        password:'',
      }}
      // validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Email</label>
        <Field name="email" />
        <ErrorMessage name="email" component="span" />
        <label>Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  ); 
}