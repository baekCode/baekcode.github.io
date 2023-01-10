import styled from '@emotion/styled';
import Link from 'next/link';
import { Text } from '~apps/@shared/components/text';
import { DatabaseItem } from '~apps/libs/notion';

interface Props {
  post: DatabaseItem;
}

export const PostItem = ({ post }: Props) => {
  const date = new Date(post.last_edited_time).toLocaleString('ko', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <Container key={post.id}>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <h3>
          <Link href={`/${post.id}`}>
            <Text value={post.properties.title.title} />
          </Link>
        </h3>
        <Link href={`/${post.id}`}>Read post →</Link>
      </div>
    </Container>
  );
};

const Container = styled.li``;
