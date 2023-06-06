import { deleteContact } from 'Redux/operations';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ContactModal } from 'components/ContactModal/ContactModal';
import { BtnBox } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>

      <BtnBox>
        <ContactModal id={id} name={name} number={number} />
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          delete
        </button>
      </BtnBox>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
