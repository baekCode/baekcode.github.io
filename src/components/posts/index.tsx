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

function Post({ title, date, categories, summary, thumbnail, link }: IPost) {
  return (
    <Item to={link}>
      <Thumbnail src={thumbnail} alt="" />
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
      {posts.map(
        ({
          node: {
            id,
            frontmatter: { title, summary, date, categories, thumbnail },
          },
        }) => (
          <Post
            key={id}
            title={title}
            date={date}
            categories={categories}
            summary={summary}
            thumbnail={thumbnail}
            link={id}
          />
        ),
      )}
    </Container>
  );
}
