import React from 'react';

import { MarkdownRenderer } from './style';

export default function PostBody({ html }: { html: string }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
}
