import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Background, Container, GoBackButton, Inner, PostData, Title } from './style';
import { IPostHead } from './types';

export default function PostHead({ thumbnail, title, date, categories }: IPostHead) {
  const onClickGoBack = () => window.history.back();

  return (
    <Container>
      <Background image={thumbnail} alt={`${title} background image`} />
      <Inner>
        <GoBackButton onClick={onClickGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </GoBackButton>
        <Title children={title} />
        <PostData>
          <div>{categories.map(item => `#${item}`).join(' ')}</div>
          <div>{date}</div>
        </PostData>
      </Inner>
    </Container>
  );
}
