import { graphql } from 'gatsby'
import React from 'react'
import Text from '../components/Text'

interface IIndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}
export default function Index({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: IIndexProps) {
  return (
    <div>
      <div>
        <Text text={title} />
        <Text text={description} />
        <Text text={author} />
      </div>
    </div>
  )
}

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
