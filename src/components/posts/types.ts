import { TGraphQlPosts } from '../../pages/types';

export interface IPost {
  post: TGraphQlPosts;
}

export interface IPosts {
  selectedCategory: string;
  posts: TGraphQlPosts[];
}
