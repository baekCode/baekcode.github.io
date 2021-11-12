import React from 'react';

import {
  Category,
  CategoryItem,
  Container,
  Date,
  Inner,
  Item,
  Summary,
  Thumbnail,
  Title,
} from './style';
import { IPost, IPosts } from './types';

function Post({ post }: IPost) {
  const {
    node: {
      id,
      frontmatter: {
        title,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
        date,
        summary,
        categories,
      },
    },
  } = post;
  return (
    <Item to={id}>
      <Thumbnail image={gatsbyImageData} alt={`${title} Thumbnail`} />
      <Inner>
        <Title children={title} />
        <Date children={date} />
        {categories && (
          <Category>
            {categories.map(item => (
              <CategoryItem key={item} children={item} />
            ))}
          </Category>
        )}
        <Summary children={summary} />
      </Inner>
    </Item>
  );
}

export default function Posts({ posts }: IPosts) {
  return (
    <Container>
      {posts.map(post => (
        <Post key={post.node.id} post={post} />
      ))}
    </Container>
  );
}
