import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import tw from 'twin.macro';

import GlobalStyle from '../style';

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center text-center`}
  * {
    font-family: 'Noto Serif KR';
  }
  h1 {
    ${tw`relative text-7xl sm:text-9xl`}
  }
  h3 {
    ${tw`mb-4 text-2xl sm:text-4xl text-gray-700`}
  }
  p {
    ${tw`mb-4 text-gray-500`}
  }
  img {
    ${tw`w-1/2`}

    margin-top: -5%;
  }
`;

const Nav = styled.div`
  ${tw`flex space-x-4`}

  button, a {
    ${tw`text-blue-400 underline border-none bg-transparent cursor-pointer`}
  }
`;

const NotFoundPage: FunctionComponent = function () {
  const onClickGoBack = () => {
    if (typeof window === 'undefined' || !window.document) return;
    window.history.back();
  };

  return (
    <Container>
      <GlobalStyle bgColor={'#fff'} />
      <h1>404</h1>
      <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
      <h3>페이지를 찾을 수 없습니다.</h3>
      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br /> 주소를 다시 한 번 확인
        해주세요
      </p>
      <Nav>
        <Link to={'/'}>홈으로</Link>
        <button onClick={onClickGoBack}>뒤로가기</button>
      </Nav>
    </Container>
  );
};

export default NotFoundPage;
