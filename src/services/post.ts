import { EntityPost } from 'entities/post'
import { GraphQLClient } from 'graphql-request'
import { wpGraphqlClient } from 'libs/graphql'
import { PostBy, Posts } from 'types/graphql/post'
import { IServicePost } from 'usecases/post'

export class ServicePost implements IServicePost {
  private driver: GraphQLClient
  constructor() {
    this.driver = wpGraphqlClient
  }
  async getPosts(page: number, perPage: number) {
    const offset = Math.max((page - 1) * perPage, 0)
    const res = await this.driver.request(Posts, {
      offset,
      size: perPage,
    })
    const postsArr = res?.posts?.nodes || []
    const paginationData = res?.posts?.pageInfo?.offsetPagination
    const postEntities = postsArr.map(
      (post: any) => new EntityPost({ ...post })
    )

    return {
      nodes: postEntities,
      pagination: {
        hasMore: paginationData.hasMore,
        hasPrevious: paginationData.hasPrevious,
      },
    }
  }
}
