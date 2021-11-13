import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

interface IAbout {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
        avatarImg: string;
      };
    };
  };
}

export default function About({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl, avatarImg },
    },
  },
}: IAbout) {
  return (
    <Layout
      title={title}
      description={description}
      url={siteUrl}
      logo={avatarImg}
      image={avatarImg}
    >
      About
    </Layout>
  );
}

export const getPostList = graphql`
  query getSiteMeta {
    site {
      siteMetadata {
        title
        description
        siteUrl
        avatarImg
      }
    }
  }
`;
