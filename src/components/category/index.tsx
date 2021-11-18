import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';

import * as utils from '../../utils';
import {
  Button,
  Container,
  IconDown,
  IconUp,
  Item,
  List,
  ListContainer,
  SelectedCategory,
} from './style';
import { ICategory } from './types';

export default function Category({ selectedCategory, categoryList }: ICategory) {
  const [width, setWidth] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(true);
  const $list = useRef<HTMLUListElement>(null);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHide(!hide);
  };

  const onClickHideList = () => setHide(true);

  useEffect(() => {
    setWidth(Math.round($list.current!.getBoundingClientRect().width));
  }, [$list]);

  return (
    <Container>
      <ListContainer>
        <Button onClick={onClick}>Select Menu</Button>
        <List ref={$list} hide={hide}>
          {utils.listSorter(Object.entries(categoryList)).map(([name, count]) => (
            <Item key={name} active={selectedCategory === name}>
              <Link to={`/?category=${name}`} onClick={onClickHideList}>
                {name} #{count}
              </Link>
            </Item>
          ))}
        </List>
        <IconUp icon={faChevronUp} />
        <IconDown icon={faChevronDown} />
      </ListContainer>
      <SelectedCategory width={width}>{selectedCategory}</SelectedCategory>
    </Container>
  );
}
