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
        author: string;
        avatarImg: string;
        githubUrl: string;
      };
    };
  };
}

export default function About({
  data: {
    site: {
      siteMetadata: { title, headingTitle, description, siteUrl, author, avatarImg, githubUrl },
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
      author={author}
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
        author
        avatarImg
        githubUrl
      }
    }
  }
`;
