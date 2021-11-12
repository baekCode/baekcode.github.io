import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import PostBody from '../components/posts/body';
import PostHead from '../components/posts/head';
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

export default function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}: IPostTemplate) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  } = edges[0];
  return (
    <Layout>
      <PostHead thumbnail={gatsbyImageData} title={title} date={date} categories={categories} />
      <PostBody html={html} />
    </Layout>
  );
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
