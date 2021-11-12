import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import { TPost } from '../pages/types';

interface IPostTemplate {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          html: string;
          frontmatter: TPost;
        };
      }[];
    };
  };
}

export default function PostTemplate({ data }: IPostTemplate) {
  console.log(data);
  return <Layout>PostTemplate</Layout>;
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
