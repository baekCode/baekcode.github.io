import { graphql } from 'gatsby';
import React from 'react';

import { CATEGORY } from '../_mock/category';
import Category from '../components/category';
import Layout from '../components/layout';
import Text from '../components/Text';
import { IIndexProps } from './types';

export default function Index({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: IIndexProps) {
  return (
    <Layout title={title}>
      <Category selectedCategory="Web" categoryList={CATEGORY} />
      <div>
        <Text text={title} />
        <Text text={description} />
        <Text text={author} />
      </div>
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
