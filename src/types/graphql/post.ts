import { gql } from 'graphql-request'
export const getPosts = gql`
  query GetPosts($offset: Int!, $size: Int!) {
    posts(where: { offsetPagination: { offset: $offset, size: $size } }) {
      nodes {
        id
        postId
        uri
        title
        content
      }
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
    }
  }
`
