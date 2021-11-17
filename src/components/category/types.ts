export type TList = [string, number]

export interface ICategory {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}
