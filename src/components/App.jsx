import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { useDispatch, } from 'react-redux';
import { refreshCurrentUser } from 'API/API.Axios';
import RestrictedRoute from './AppBar/UserMenu/RestrictedRoure';
import PrivateRoute from './AppBar/PrivateRoute';

// import PrivateRoute from './AppBar/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Review/Reviews'));
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Title } from './Title/Title.styled';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser())
  },[dispatch])
  return (
   
      <Routes>
<Route path='/' element={<Layout/>}>
<Route index element={<HomePage/>}/>
<Route path='/register'
 element={
 <RestrictedRoute
  component={RegisterPage}
   redirectTo='/contacts'/>}/>
 {/* <Route path='/register' element={<RegisterPage/>}/> */}
<Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo='/contacts'/>}/> 
<Route path='/contacts' element={<PrivateRoute component={ContactsPage} redirectTo='/login'/>}/> 

<Route path="*" element={<Navigate to='/' />} />
        </Route>
      </Routes>
    // <Layout>
    //   <ContactForm />
    //   <Title>Contacts</Title>
    //   <Filter />
    //   <ContactList />
    //   <GlobalStyle />
    // </Layout>
  );
};
