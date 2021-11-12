import { css, Global } from '@emotion/react';
import React, { FunctionComponent } from 'react';
import tw from 'twin.macro';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
    font-size: 16px;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
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
  .utterances {
    ${tw`w-full max-w-full pt-4`}
    border-top: 1px solid #eee;
    .utterances-frame {
      ${tw`px-5 sm:px-10`}
    }
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
