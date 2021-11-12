import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';

import { TGraphQlPosts } from '../pages/types';

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: TGraphQlPosts[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = function (selectedCategory: string, posts: TGraphQlPosts[]) {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(1);

  const postListByCategory = useMemo<TGraphQlPosts[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: TGraphQlPosts) =>
          selectedCategory !== 'All' ? categories.includes(selectedCategory) : true,
      ),
    [selectedCategory],
  );

  const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return;

    setCount(value => value + 1);
    observer.disconnect();
  });

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.observe(containerRef.current.children[containerRef.current.children.length - 1]);
  }, [count, selectedCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
};

export default useInfiniteScroll;