import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title.styled';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
//       <Routes>
// <Route path='/' element={<Layout/>}/>
// <Route index element={<HomePage/>}/>
// <Route path='/register' element={<RegisterPage/>}/>
// <Route path='/login' element={<LoginPage/>}/>
// <Route path='/contacts' element={<ContactsPage/>}/>
//       </Routes>
    <Layout>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
