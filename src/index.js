import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
         basename="/
goit-react-hw-08-phonebook"
>
        <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
