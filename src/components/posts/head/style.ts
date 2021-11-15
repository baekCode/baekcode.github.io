import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`relative w-full h-48 sm:h-64 lg:h-80`}
`;

export const Background = styled(GatsbyImage)`
  ${tw`absolute top-0 left-0 z-0 w-full h-48 sm:h-64 lg:h-80 object-cover filter blur-lg`}
  filter:  grayscale(50%);

  &::after {
    content: '';
    ${tw`absolute top-0 left-0 w-full h-full`}
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

export const Inner = styled.div`
  ${tw`relative z-10 flex flex-col items-start w-full h-full p-5 sm:p-10 text-white`}
  text-shadow : 2px 2px 2px rgba(0, 0, 0, 0.4);
`;
export const GoBackButton = styled.button`
  ${tw`bg-transparent text-white text-xl cursor-pointer border-0`}
`;

export const Title = styled.div`
  ${tw`overflow-hidden mt-auto pb-2 overflow-ellipsis whitespace-normal break-words line-clamp-2 font-bold text-2xl sm:text-3xl lg:text-5xl`}
  -webkit-box-orient: vertical;
`;

export const PostData = styled.div`
  ${tw`flex justify-between items-center w-full mt-2 font-bold text-xs sm:text-base`}
`;
