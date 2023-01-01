import { IndexPage } from '~apps/index/IndexPage';
import { getDatabase } from '~apps/libs/notion';

export const getStaticProps = async () => {
  const { posts, title } = await getDatabase();

  return {
    props: {
      posts: posts,
      title,
    },
    revalidate: 1,
  };
};

export default IndexPage;
