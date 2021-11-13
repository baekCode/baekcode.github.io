import { ReactNode } from 'react';

export interface ILayout {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
}
