import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

interface IAbout {
  data: {
    site: {
      siteMetadata: {
        title: string;
        headingTitle: string;
        description: string;
        siteUrl: string;
        avatarImg: string;
        githubUrl: string;
      };
    };
  };
}

export default function About({
  data: {
    site: {
      siteMetadata: { title, headingTitle, description, siteUrl, avatarImg, githubUrl },
    },
  },
}: IAbout) {
  return (
    <Layout
      title={title}
      headingTitle={headingTitle}
      description={description}
      url={siteUrl}
      logo={avatarImg}
      image={avatarImg}
      footerLink={githubUrl}
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
        headingTitle
        description
        siteUrl
        avatarImg
        githubUrl
      }
    }
  }
`;
