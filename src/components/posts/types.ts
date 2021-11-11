import { TGraphQlPost } from '../../pages/types';

export interface IPost {
  title: string;
  summary: string;
  date: string;
  categories: string[];
  thumbnail: string;
  link: string;
}

export interface IPosts {
  posts: TGraphQlPost[];
}
