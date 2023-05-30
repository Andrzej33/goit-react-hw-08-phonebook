import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector, } from 'react-redux';
import { refreshCurrentUser } from 'API/API.Axios';
import RestrictedRoute from './AppBar/UserMenu/RestrictedRoure';
import PrivateRoute from './AppBar/PrivateRoute';
import { selectIsRefreshing } from 'Redux/selectors';



const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));



export const App = () => {
  const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser())
  },[dispatch])
  return (
   isRefreshing && (
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
   )

   
  );
};
