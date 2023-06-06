import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from './Form.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import { addContact } from 'Redux/operations';
import { useToast } from '@chakra-ui/react';

// const  phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('Required field'),
});

const createToaster = (value, type) => {
  const options = {
    title: `${type}`,
    description: `${value} is already in contacts`,
    status: 'warning',
    duration: 6000,
    isClosable: true,
    position: 'top-left',
  };
  return options;
};

export const ContactForm = () => {
  const toast = useToast();
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (
      items.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      toast(createToaster(values.name, 'name'));

      return;
    }
    if (items.find(contact => contact.number === values.number)) {
      toast(createToaster(values.number, 'number'));

      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Name </label>
        <Field name="name" />
        <ErrorMessage name="name" component="span" />
        <label>Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
