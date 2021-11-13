import { graphql } from 'gatsby';
import queryString from 'query-string';
import React, { useMemo } from 'react';

import Category from '../components/category';
import { ICategory } from '../components/category/types';
import Layout from '../components/layout';
import Posts from '../components/posts';
import { IIndexProps } from './types';

export default function Index({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges: posts },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: IIndexProps) {
  const parsed = queryString.parse(search);
  const selectedCategory =
    typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category;

  console.log({ search, gatsbyImageData, parsed });
  const categoryList = useMemo(
    () =>
      posts.reduce(
        (
          list: ICategory['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: { node: { frontmatter: { categories: string[] } } },
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });
          list['All']++;
          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <Layout title={title} description={description} url={siteUrl} image={publicURL}>
      <Category selectedCategory={selectedCategory} categoryList={categoryList} />
      <Posts selectedCategory={selectedCategory} posts={posts} />
    </Layout>
  );
}

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;
