import { TGraphQlPosts } from '../../pages/';

export interface IPost {
  post: TGraphQlPosts;
}

export interface IPosts {
  selectedCategory: string;
  posts: TGraphQlPosts[];
}
