import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const GlobalStyle = createGlobalStyle<{ bgColor?: string }>`
  @import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed&family=Noto+Serif+KR&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Encode Sans Semi Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 0.05em;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    ${({ bgColor }) => (bgColor ? `background: ${bgColor}` : tw`bg-gray-50`)}
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  .utterances {
    ${tw`w-full max-w-full pt-4`}
    border-top: 1px solid #eee;
    .utterances-frame {
      ${tw`px-5 sm:px-10`}
    }
  }
`;

export default GlobalStyle;
