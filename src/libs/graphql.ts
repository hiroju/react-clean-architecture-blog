import { GraphQLClient } from 'graphql-request'
const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT || ''
export const wpGraphqlClient = new GraphQLClient(endpoint, { headers: {} })
