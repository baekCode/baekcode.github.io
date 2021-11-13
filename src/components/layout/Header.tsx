import { Link } from 'gatsby';
import React from 'react';

import Category from '../category';
import { HeaderContainer, HeaderInner, HeaderLogo, Thumbnail } from './style';

export default function Header({
  title,
  logo,
  selectedCategory,
  categoryList,
}: {
  title: string;
  logo: string;
  selectedCategory?: string;
  categoryList?: {
    [key: string]: number;
  };
}) {
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogo>
          <Link to={'/'}>
            <Thumbnail src={logo} alt={`${title} LOGO`} />
            {title}
          </Link>
        </HeaderLogo>
        <nav>
          <ul>
            <li>
              <Link to={'/about'}>about me</Link>
            </li>
            <li>
              <Link to={'/'}>posts</Link>
            </li>
          </ul>
        </nav>
      </HeaderInner>
      {selectedCategory && categoryList && (
        <Category selectedCategory={selectedCategory} categoryList={categoryList} />
      )}
    </HeaderContainer>
  );
}
