import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`grid grid-cols-2 md:grid-cols-4`}
`;

export const Item = styled(Link)`
  ${tw`flex flex-col rounded shadow`}
  transition: 0.3s box-shadow;

  &:hover {
    ${tw`shadow-lg`}
  }
`;
