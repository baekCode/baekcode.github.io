import { graphql } from 'gatsby';
import React from 'react';

import { CATEGORY } from '../_mock/category';
import Category from '../components/category';
import Layout from '../components/layout';
import Posts from '../components/posts';
import { IIndexProps } from './types';

export default function Index({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}: IIndexProps) {
  return (
    <Layout>
      <Category selectedCategory="Web" categoryList={CATEGORY} />
      <Posts posts={posts} />
    </Layout>
  );
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail
          }
        }
      }
    }
  }
`;
