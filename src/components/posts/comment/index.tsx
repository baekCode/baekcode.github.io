import React, { createRef, useEffect } from 'react';

import { UtterancesAttributesType } from './types';
import { GITHUB_REPOSITORY, UTTERANCES_SRC } from '../../../constants';

export default function Comment() {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src: process.env.UTTERANC_SRC as string || UTTERANCES_SRC,
      repo: process.env.GITHUB_REPOSITORY as string || GITHUB_REPOSITORY,
      'issue-term': 'title',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <div ref={element} />;
}
