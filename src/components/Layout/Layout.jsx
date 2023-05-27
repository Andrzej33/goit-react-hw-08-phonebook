import { Container, StyledHeader } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from 'components/StyledLink/StyledLink';
import { GlobalStyle } from 'components/GlobalStyle';

export const Layout = () => {
  return(
   <Container>
        <StyledHeader>
        <nav>
          <StyledNavLink to="/register" >
            Register
          </StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </nav>
      </StyledHeader>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <GlobalStyle/>
   </Container>);

};
