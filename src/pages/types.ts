import { IGatsbyImageData } from 'gatsby-plugin-image';

export type TPost = {
  title: string;
  summary: string;
  date: string;
  categories: string[];
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

export type TGraphQlPosts = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: TPost;
  };
};

export interface IIndexProps {
  location: { search: string };
  data: {
    allMarkdownRemark: {
      edges: TGraphQlPosts[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}
