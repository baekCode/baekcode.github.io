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
    frontmatter: TPost;
  };
};

export interface IIndexProps {
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
