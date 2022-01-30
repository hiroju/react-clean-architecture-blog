import { gql } from 'graphql-request'
export const Posts = gql`
  query Posts($offset: Int!, $size: Int!) {
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
