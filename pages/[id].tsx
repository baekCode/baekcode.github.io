import { getBlocks, getDatabase, getPage } from '~apps/libs/notion';
import { GetStaticProps } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import { PostPage } from '~apps/post/PostPage';

export default PostPage;

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
