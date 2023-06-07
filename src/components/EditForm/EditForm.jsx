import { Form } from 'components/ContactForm/Form.styled';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { editContact } from 'Redux/operations';
import PropTypes from 'prop-types';

export const EditForm = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const editedContact = {
      id,
      name: values.name,
      number: values.number,
    };

    dispatch(editContact(editedContact));

    onClose();
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
        <label>Number</label>
        <Field type="tel" name="number" />
        <button type="submit">Edit contact</button>
      </Form>
    </Formik>
  );
};


EditForm.propTypes = {
  id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClose:PropTypes.func.isRequired,
 };
