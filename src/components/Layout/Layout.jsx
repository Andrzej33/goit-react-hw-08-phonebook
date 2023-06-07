import { Container } from './Layout.styled';
import { Spinner, Center, useToast } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import AppBar from 'components/AppBar/AppBar';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoggedIn } from 'Redux/selectors';
import { GreetingTitle } from 'components/GreetingTitle/GreetingTitle';

export const Layout = () => {
  const error = useSelector(selectError);
  const toasterOptions = {
    title: 'Error info',
    description: error,
    status: 'error',
    duration: 6000,
    isClosable: true,
  };

  const toast = useToast();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBar />
      {error &&
        error !== 'Your email or password is incorrect' &&
        toast(toasterOptions)}
      {!isLoggedIn && <GreetingTitle />}
      <Container>
        <Suspense
          fallback={
            <Center w="100%">
              <Spinner
                thickness="5px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          }
        >
          <Outlet />
        </Suspense>
        <GlobalStyle />
      </Container>
    </>
  );
};
