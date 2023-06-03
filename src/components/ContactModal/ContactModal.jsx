import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { EditForm } from 'components/EditForm/EditForm'


  export const ContactModal = ({id,name,number}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [contactName, setContactName] = useState(name)
    // const [contactNumber, setContactNumber] = useState(number)
    // const handleNameChange = (event) => setContactName(event.target.value);
    // const handleNumberChange = (event) => setContactNumber(event.target.value);
    const onCloseModal = () => {

        onClose();

    }
    return (
      <>
        <Button onClick={onOpen}>edit</Button>
  
        <Modal isOpen={isOpen} onClose={onCloseModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <EditForm id={id} name={name} number={number}/>
      {/* <Input value={contactName} variant='filled' onChange={handleNameChange} />
      <Input value={contactNumber} variant='filled' onChange={handleNumberChange} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Edit Contact</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }