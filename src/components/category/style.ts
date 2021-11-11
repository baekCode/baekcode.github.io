import styled from 'styled-components';
import tw from 'twin.macro';

export const Item = styled.li<{ active: boolean }>`
  ${({ active }) => (active ? tw`font-bold` : '')}
  ${tw``}
`;
