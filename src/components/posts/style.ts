import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-5 py-2 sm:px-10 sm:py-5`}
`;

export const Item = styled(Link)`
  ${tw`flex flex-col rounded bg-white shadow`}
  transition: 0.3s box-shadow;

  &:hover {
    ${tw`shadow-lg`}
  }
`;

export const Thumbnail = styled(GatsbyImage)`
  ${tw`w-full h-40 shadow-sm rounded-t-md object-cover`}
`;

export const Inner = styled.div`
  ${tw`p-3`}
`;

export const Title = styled.div`
  ${tw`overflow-hidden mb-3 overflow-ellipsis whitespace-normal break-words line-clamp-2 font-medium text-xl`}

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
  ${tw`overflow-hidden mt-3 overflow-ellipsis whitespace-normal break-words line-clamp-2 opacity-80`}

  -webkit-box-orient: vertical;
`;
