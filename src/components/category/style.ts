import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`flex`}
`;

export const SelectedCategory = styled.div<{ width: number }>`
  ${({ width }) => `width: ${width}px;`}
  ${tw`relative flex items-center h-7.5 pl-7.5 font-bold`}
  &::before {
    content: '';
    ${tw`absolute left-3.25 w-0.5 h-6.25`}
    background: #d7d7d7;
    transform: rotate(20deg);
  }
`;

export const List = styled.div`
  ${tw`relative overflow-hidden h-7.5`}
  ul {
    ${tw`relative z-10`}
  }
`;

export const Item = styled.li<{ active: boolean }>`
  ${tw`flex items-center h-7.5  `}
  a {
    ${tw`block w-full pr-5`}
  }
`;

export const IconUp = styled(FontAwesomeIcon)`
  ${tw`absolute right-0 top-1 text-xs`}
`;
export const IconDown = styled(FontAwesomeIcon)`
  ${tw`absolute right-0 top-3.5 text-xs`}
`;
