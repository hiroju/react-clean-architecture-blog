import { gql } from "graphql-request";
export const getPosts = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        date
      }
    }
  }
`;
