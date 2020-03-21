import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import store from './app/store';
import { Provider } from 'react-redux';

const theme = {
  primary: '#60b0f4',
  secondary: '#f0f4f6',
  gray: 'hsl(0, 0%, 55%)',
  borderRadius: '0.3rem'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
