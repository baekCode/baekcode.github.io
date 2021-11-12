import { IGatsbyImageData } from 'gatsby-plugin-image';

export type GatsbyImgProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

export interface IPostHead {
  thumbnail: IGatsbyImageData;
  title: string;
  date: string;
  categories: string[];
}
