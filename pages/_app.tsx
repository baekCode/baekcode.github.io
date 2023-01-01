import type { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';
import { globalStyle } from '~styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${globalStyle}
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
