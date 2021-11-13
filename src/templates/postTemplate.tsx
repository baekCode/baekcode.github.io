import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import PostBody from '../components/posts/body';
import Comment from '../components/posts/comment';
import PostHead from '../components/posts/head';
import { TPost } from '../pages';

interface IPostTemplate {
  data: {
    site: {
      siteMetadata: {
        title: string;
        avatarImg: string;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: {
          html: string;
          frontmatter: TPost;
        };
      }[];
    };
  };
  location: {
    href: string;
  };
}

export default function PostTemplate({
  data: {
    site: {
      siteMetadata: { title: siteTitle, avatarImg },
    },
    allMarkdownRemark: { edges },
  },
  location: { href },
}: IPostTemplate) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        summary,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0];
  return (
    <Layout title={siteTitle} description={summary} url={href} image={publicURL} logo={avatarImg}>
      <PostHead thumbnail={gatsbyImageData} title={title} date={date} categories={categories} />
      <PostBody html={html} />
      <Comment />
    </Layout>
  );
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    site {
      siteMetadata {
        title
        avatarImg
      }
    }
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
              publicURL
            }
          }
        }
      }
    }
  }
`;
