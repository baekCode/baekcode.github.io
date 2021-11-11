import React from 'react';

import { Category, CategoryItem, Container, Date, Item, Summary, Thumbnail, Title } from './style';
import { IPost, IPosts } from './types';

function Post({ title, date, categories, summary, thumbnail, link }: IPost) {
  return (
    <Item to={link}>
      <Thumbnail src={thumbnail} alt="" />
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
    </Item>
  );
}

export default function Posts({ posts }: IPosts) {
  return (
    <Container>
      {posts.map(({ title, date, categories, summary, thumbnail, link }) => (
        <Post
          key={title}
          title={title}
          date={date}
          categories={categories}
          summary={summary}
          thumbnail={thumbnail}
          link={link}
        />
      ))}
    </Container>
  );
}
