import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';

import * as utils from '../../utils';
import { Container, IconDown, IconUp, Item, List, SelectedCategory } from './style';
import { ICategory } from './types';

export default function Category({ selectedCategory, categoryList }: ICategory) {
  const [width, setWidth] = useState<number>(0);
  const $list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setWidth(Math.round($list.current!.getBoundingClientRect().width));
  }, [$list]);

  return (
    <Container>
      <List>
        <ul ref={$list}>
          {utils.listSorter(Object.entries(categoryList)).map(([name, count]) => (
            <Item key={name} active={selectedCategory === name}>
              <Link to={`/?category=${name}`}>
                {name} #{count}
              </Link>
            </Item>
          ))}
        </ul>
        <IconUp icon={faChevronUp} />
        <IconDown icon={faChevronDown} />
      </List>
      <SelectedCategory width={width}>{selectedCategory}</SelectedCategory>
    </Container>
  );
}
