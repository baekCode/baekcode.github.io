import React from 'react';

import { Item } from './style';
import { ICategory } from './types';

export default function Category({ selectedCategory, categoryList }: ICategory) {
  return (
    <div>
      <ul>
        {Object.entries(categoryList).map(([name, count]) => (
          <Item key={name} active={selectedCategory === name}>
            {name} #{count}
          </Item>
        ))}
      </ul>
    </div>
  );
}
