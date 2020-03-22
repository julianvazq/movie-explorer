import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import store from './app/store';
import { Provider } from 'react-redux';

const theme = {
  light: '#fff',
  gray: 'hsl(250,5%,15%)',
  dark: 'hsl(250, 40%, 5%)',
  gold: 'hsl(46, 50%, 50%)',
  grayLight: 'hsl(46,0%,70%)',
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
