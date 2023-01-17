import { Fragment } from 'react';
import { getBlocks, getDatabase, getPage, PageItem } from '~apps/libs/notion';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import { Text } from '~apps/@shared/components/text';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { renderBlock } from '~utils';

interface Props {
  page: PageItem;
  blocks: BlockObjectResponse[];
}

export default function Post({ page, blocks }: Props) {
  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
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
    </div>
  );
}

export const getStaticPaths = async () => {
  const { result } = await getDatabase();

  return {
    paths: result.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

interface StaticProps extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as StaticProps;

  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};
