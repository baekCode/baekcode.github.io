import { DatabaseItem } from '~apps/libs/notion';
import { CommonLayout } from '~apps/layouts/CommonLayout';
import { Posts } from './components/Posts';

interface Props {
  posts: DatabaseItem[];
}

export const IndexPage = ({ posts }: Props) => {
  return (
    <CommonLayout>
      <Posts posts={posts} />
    </CommonLayout>
  );
};
