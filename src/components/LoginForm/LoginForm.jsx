import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from './Form.styled';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
    name: Yup.string().required('Required field'),
    email: Yup.string().min(5, 'must be at least 5 characters long').email('must be a valid email').required('Required field'),
    password: Yup.string().min(8, 'must be at least 8 characters long').required('Required field')
      //  .max(12,'this number must be less longer then 12 symbols')
      .typeError("That doesn't look like a password")
      .positive("A password can't start with a minus")
      .integer("A password can't include a decimal point")
      .required('Required field'),
  });

export const LoginForm = () => {

    // const { items } = useSelector(selectContacts);
    // const dispatch = useDispatch();
  
    // const handleSubmit = (values, actions) => {
    //   if (
    //     items.find(
    //       contact => contact.name.toLowerCase() === values.name.toLowerCase()
    //     )
    //   ) {
    //     alert(`${values.name} is already in contacts`);
    //     return;
    //   }
    //   if (items.find(contact => contact.number === values.number)) {
    //     alert(`${values.number} is already exist in contacts`);
    //     return;
    //   }
    //   {
    //     const newValues = { name: values.name, phone: values.number };
  
    //     dispatch(addContact(newValues));
    //   }
  
    //   actions.resetForm();
    // };

    return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password:'',
      }}
      validationSchema={ContactsSchema}
    //   onSubmit={handleSubmit}
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
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  ); 
}