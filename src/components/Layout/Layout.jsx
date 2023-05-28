import { Container } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

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
   </Container>
   </>
   );

};
