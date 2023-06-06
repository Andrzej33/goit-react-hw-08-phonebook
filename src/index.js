import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { store,persistor } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react'

const theme = {
  colors: {
    text: 'black',
    active: 'green',
    passive: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter 
        basename="/goit-react-hw-08-phonebook">
          <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider >
        <App />
        </ChakraProvider>
        </PersistGate>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
