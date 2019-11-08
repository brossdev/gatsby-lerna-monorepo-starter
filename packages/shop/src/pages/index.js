import React from 'react'
import Link from 'gatsby-link'
import { ItemCard, ItemCardWrapper } from '@lerna-monorepo/shared-ui'

const BlogPage = ({ data }) => {
  const edges = data.allShoppingJson.edges

  return (
    <div>
      <h1>Shopping Page</h1>
      <ItemCardWrapper>
        {edges && edges.map(edge => <ItemCard key={edge.node.id} data={edge.node} slug="item" />)}
      </ItemCardWrapper>
      <a href={process.env.BLOG_URL}>Go to Blog</a>
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPostsQuery {
    allShoppingJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`