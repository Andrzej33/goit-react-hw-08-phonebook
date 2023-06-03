import { Form } from 'components/ContactForm/Form.styled';
import { Formik, Field } from 'formik';


import { useDispatch } from 'react-redux';
// import { selectContacts } from 'Redux/selectors';
import { editContact } from 'Redux/operations';
// import { useState } from 'react'



export const EditForm = ({id,name,number}) => {
//   const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();
//   const [contactName, setContactName] = useState(name)
//     const [contactNumber, setContactNumber] = useState(number)

  const handleSubmit = (values, actions) => {
    // if (
    //   items.find(
    //     contact => contact.name.toLowerCase() === values.name.toLowerCase()
    //   )
    // ) {
    //   alert(`${values.name} is already in contacts`);
    //   return;
    // }
    // if (items.find(contact => contact.number === values.number)) {
    //   alert(`${values.number} is already exist in contacts`);
    //   return;
    // }
    // {
    //   const newValues = { name: values.name, phone: values.number };

    //   dispatch(addContact(newValues));
    // }
    const editedContact = {
      id,
      name: values.name,
      number: values.number
    }
   
dispatch(editContact(editedContact))
// console.log(editedContact);
    // actions.resetForm();
  };

  

  return (
    <Formik
      initialValues={{
        
        name: name,
        number: number,
      }}
      
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Name </label>
        <Field name="name" />
        {/* <ErrorMessage name="name" component="span" /> */}
        <label>Number</label>
        <Field type="tel" name="number" />
        {/* <ErrorMessage name="number" component="span" /> */}
        <button type="submit">Edit contact</button>
        
      </Form>
    </Formik>
  );
};
