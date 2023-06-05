import { Container } from './Layout.styled';
// import { Loader } from 'components/Loader/Loader';
import { Spinner } from '@chakra-ui/react'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'components/GlobalStyle';
import AppBar from 'components/AppBar/AppBar';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/selectors';
import { GreetingTitle } from 'components/GreetingTitle/GreetingTitle';

export const Layout = () => {

  // const {isLoggedIn} = useSelector(selectIsLoggedIn)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return(
    <>
    <AppBar/>
    {!isLoggedIn && <GreetingTitle/>}
   <Container>
       <Suspense fallback={<Spinner
  thickness='5px'
  speed='0.55s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>}>
        <Outlet />
      </Suspense>
      <GlobalStyle/>
      <Toaster  position="bottom-center"
  reverseOrder={false}/>
   </Container>
   </>
   );

};
