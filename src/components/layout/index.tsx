import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyle from '../../style';
import Header from './Header';
import { Container } from './style';
import { ILayout } from './types';

export default function Layout({ title, description, url, image, children }: ILayout) {
  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@baekcode" />
        <meta name="twitter:creator" content="@baekcode" />
        <link rel="canonical" href={url} />
      </Helmet>
      <GlobalStyle />
      <Container>
        <Header title={`Title`} />
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
        </footer>
      </Container>
    </>
  );
}
