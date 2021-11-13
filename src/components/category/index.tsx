import { Link } from 'gatsby';
import React from 'react';

import { Item } from './style';
import { ICategory } from './types';

export default function Category({ selectedCategory, categoryList }: ICategory) {
  return (
    <div>
      <ul>
        {Object.entries(categoryList).map(([name, count]) => (
          <Item key={name} active={selectedCategory === name}>
            <Link to={`/?category=${name}`}>
              {name} #{count}
            </Link>
          </Item>
        ))}
      </ul>
    </div>
  );
}
