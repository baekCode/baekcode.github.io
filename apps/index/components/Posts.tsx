import styled from '@emotion/styled';
import { DatabaseItem } from '~apps/libs/notion';
import { PostItem } from '~apps/index/components/PostItem';

interface Props {
  posts: DatabaseItem[];
}

export const Posts = ({ posts }: Props) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;
