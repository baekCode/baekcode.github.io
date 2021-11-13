import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './styles/typed-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import App from './Components/App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
