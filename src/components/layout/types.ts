import { ReactNode } from 'react';

export interface ILayout {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
  logo: string;
  selectedCategory?: string;
  categoryList?: {
    [key: string]: number;
  };
}
