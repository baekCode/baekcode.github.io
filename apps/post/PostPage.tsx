import { PageItem } from '~apps/libs/notion';
import { CommonLayout } from '~apps/layouts/CommonLayout';
import { Fragment } from 'react';
import Link from 'next/link';

import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { renderBlock } from '~utils';
import { Text } from '~apps/@shared/components/text';

interface Props {
  page: PageItem;
  blocks: BlockObjectResponse[];
}

export const PostPage = ({ page, blocks }: Props) => {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <CommonLayout>
      <article>
        <h1>
          <Text value={page.properties.title.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/">← Go home</Link>
        </section>
      </article>
    </CommonLayout>
  );
};
