import { Formik, Field } from 'formik';
import { Form, ErrorMessage  } from 'components/ContactForm/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'Redux/operations';
import * as Yup from 'yup';
import { selectError } from 'Redux/selectors';
// import { selectError } from 'Redux/selectors';
// import { selectError } from 'Redux/selectors';
// import { useToast } from '@chakra-ui/react'
// import { selectError } from 'Redux/selectors';

const ContactsSchema = Yup.object().shape({
  email: Yup.string().min(5, 'must be at least 5 characters long').email('must be a valid email').required('Required field'),
  password: Yup.string().min(8, 'must be at least 8 characters long').required('Required field')
    .typeError("That doesn't look like a password")
    .required('Required field'),
});



export const LoginForm = () => {

   const error = useSelector(selectError);
    const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
// if(values.email.trim().length < 5){
//   console.log('fail');
//   return
// }
// if( values.password.trim().length < 7){
//   console.log('fail');
//   return
// }
      dispatch(login(values));
      actions.resetForm();
      
     
    };
    
    return (
      
      
      
    <Formik
      initialValues={{
        email: '', 
        password:'',
      }}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form>
      {error && <b>{error}</b>}
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