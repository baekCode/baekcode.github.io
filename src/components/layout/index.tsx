import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyle from '../../style';
import Header from './Header';
import { Container, Contents, Footer } from './style';
import { ILayout } from './types';

export default function Layout({
  title,
  headingTitle,
  description,
  url,
  image,
  selectedCategory,
  categoryList,
  logo,
  footerLink,
  children,
}: ILayout) {
  return (
    <>
      <Helmet>
        <html lang="ko" />
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
        <meta
          name="google-site-verification"
          content="lbgradPGc5SxVkGEYQ3qAKDAjWiTrU_tCVQ35_sUhgU"
        />
        <meta name="naver-site-verification" content="54621279b405c5c93047c44c38d3db1f8c67183c" />
      </Helmet>
      <GlobalStyle />
      <Container>
        <Header
          title={headingTitle}
          logo={logo}
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <Contents>{children}</Contents>
        <Footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <Link to={footerLink} target={'_blank'}>
            © {title}
          </Link>
        </Footer>
      </Container>
    </>
  );
}
