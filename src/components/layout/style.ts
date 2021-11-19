import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`flex flex-col h-full`}
`;

export const Contents = styled.main`
  ${tw``}
`;

export const Footer = styled.footer`
  ${tw`px-5 py-2 sm:px-10 sm:py-5 text-center`}
`;

export const HeaderContainer = styled.header`
  ${tw`sticky top-0 left-0 bg-white z-50 shadow-sm px-5 py-2 sm:px-10 sm:py-5`}
`;

export const HeaderInner = styled.div`
  ${tw`flex items-center justify-between`}
`;

export const HeaderLogo = styled.h1`
  a {
    ${tw`flex items-center text-2xl`}
    line-height: 0
  }
`;

export const Thumbnail = styled.img`
  ${tw`w-7 h-7 mr-2 rounded-full shadow`}
`;
