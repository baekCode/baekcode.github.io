import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box
  }
  html,body,#root {height: 100%}
  body {
    font-family: Sunflower, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;
    background: #121212;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  input,
  button {
    &:focus,
    &:active {
      outline: none;
    }
  }
`;

export default GlobalStyle;
