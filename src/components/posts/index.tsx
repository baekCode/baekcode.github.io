import React, { useMemo } from 'react';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
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

export default function Posts({ selectedCategory, posts }: IPosts) {
  const { containerRef, postList } = useInfiniteScroll(selectedCategory, posts);
  const postsData = useMemo(
    () =>
      postList.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) => (selectedCategory !== 'All' ? categories.includes(selectedCategory) : true),
      ),
    [selectedCategory, postList],
  );

  return (
    <Container ref={containerRef}>
      {postsData.map(post => (
        <Post key={post.node.id} post={post} />
      ))}
    </Container>
  );
}
