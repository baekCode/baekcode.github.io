import { ReactNode } from 'react';

export interface ILayout {
  title: string;
  headingTitle: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
  logo: string;
  footerLink: string;
  selectedCategory?: string;
  categoryList?: {
    [key: string]: number;
  };
}
