import { Container } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'components/GlobalStyle';
import AppBar from 'components/AppBar/AppBar';

export const Layout = () => {
  return(
    <>
    <AppBar/>
   <Container>
       <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <GlobalStyle/>
      <Toaster  position="bottom-center"
  reverseOrder={false}/>
   </Container>
   </>
   );

};
