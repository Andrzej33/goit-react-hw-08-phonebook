import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title.styled';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
