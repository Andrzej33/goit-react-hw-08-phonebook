import { ContactItem } from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { ListOfContacts } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
import { Spinner, Center } from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListOfContacts>
      {isLoading && (
        <Center w="100%">
          <Spinner
            thickness="5px"
            speed="0.55s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}

      {filteredContacts.length !== 0 ? (
        filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          );
        })
      ) : (
        <h3 style={{ paddingLeft: '40px' }}>
          There are no apropriate contacts
        </h3>
      )}
    </ListOfContacts>
  );
};
