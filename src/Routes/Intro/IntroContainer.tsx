import React, { useState, useEffect } from 'react';
import IntroPresenter from './IntroPresenter';

const IntroContainer = () => {
  const [name, setName] = useState('게스트');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(name);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value);

  const onClickKeydown = (e: any) => {
    if (e.key === 'Escape') return console.log(name);
  };

  useEffect(() => {
    window.addEventListener('keydown', onClickKeydown);
  });

  return <IntroPresenter onSubmit={onSubmit} onChange={onChange} />;
};

export default IntroContainer;
