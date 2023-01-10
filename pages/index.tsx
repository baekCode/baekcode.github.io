import { IndexPage } from '~apps/index/IndexPage';
import { getDatabase } from '~apps/libs/notion';

/**
 * @description getStaticProps 이유?
 * 굳이 계속 반복 호출을 할 필요가 있나?
 * revalidate 로 캐싱 및 호출 시간을 제어 한다.
 * */
export const getStaticProps = async () => {
  const { posts, title } = await getDatabase();

  return {
    props: {
      posts,
      title,
    },
    revalidate: 10,
  };
};

export default IndexPage;
