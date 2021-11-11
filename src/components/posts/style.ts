import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`grid gap-4 grid-cols-2 md:grid-cols-4`}
`;

export const Item = styled(Link)`
  ${tw`flex flex-col rounded shadow`}
  transition: 0.3s box-shadow;

  &:hover {
    ${tw`shadow-lg`}
  }
`;

export const Thumbnail = styled.img`
  ${tw`w-full h-40 rounded-t-md object-cover`}
`;

export const Title = styled.div`
  ${tw`overflow-hidden my-3 overflow-ellipsis whitespace-normal break-words line-clamp-2 font-bold text-xl`}

  -webkit-box-orient: vertical;
`;

export const Date = styled.div`
  ${tw`text-sm opacity-70`}
`;

export const Category = styled.div`
  ${tw`flex flex-wrap mt-2.5`}
`;

export const CategoryItem = styled.div`
  ${tw`my-0.5 mx-1 py-0.5 px-1 font-bold text-sm text-white rounded bg-black`}
`;

export const Summary = styled.div`
  ${tw`overflow-hidden my-3 overflow-ellipsis whitespace-normal break-words line-clamp-2 opacity-80`}

  -webkit-box-orient: vertical;
`;
