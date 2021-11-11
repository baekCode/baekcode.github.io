import { Link } from 'gatsby';
import React from 'react';

import { Container, Item } from './style';
import { IPost, IPosts } from './types';

function Post({ title, date, categories, summary, thumbnail, link }: IPost) {
  return (
    <Item>
      <Link to={link}>
        <img src={thumbnail} alt="" />
        <div>{title}</div>
        <div>{date}</div>
        <div>{categories}</div>
        <div>{summary}</div>
      </Link>
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
