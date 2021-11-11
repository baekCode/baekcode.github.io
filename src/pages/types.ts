export type TGraphQlPost = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: string;
    };
  };
};

export interface IIndexProps {
  data: {
    allMarkdownRemark: {
      edges: TGraphQlPost[];
    };
  };
}
