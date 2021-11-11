import React from 'react';

import GlobalStyle from '../../style';
import Header from './Header';
import { Container } from './style';
import { ILayout } from './types';

export default function Layout({ children, title }: ILayout) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header title={title || `Title`} />
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
