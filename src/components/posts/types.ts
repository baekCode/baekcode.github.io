export interface IPost {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: string;
  link: string;
}

export interface IPosts {
  posts: IPost[];
}
