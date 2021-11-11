import { graphql } from 'gatsby';
import React from 'react';

import { CATEGORY } from '../_mock/category';
import { POSTS } from '../_mock/posts';
import Category from '../components/category';
import Layout from '../components/layout';
import Posts from '../components/posts';
import { IIndexProps } from './types';

export default function Index({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}: IIndexProps) {
  return (
    <Layout title={title}>
      <Category selectedCategory="Web" categoryList={CATEGORY} />
      <Posts posts={POSTS} />
    </Layout>
  );
}

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
