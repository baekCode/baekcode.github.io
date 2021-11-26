import React from 'react';

import Layout from '../components/layout';
import { IOtherPage } from './about';

export default function Portfolio({
  data: {
    site: {
      siteMetadata: { title, headingTitle, description, siteUrl, author, avatarImg, githubUrl },
    },
  },
}: IOtherPage) {
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
      portfolio
    </Layout>
  );
}
