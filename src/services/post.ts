import { EntityPost } from 'entities/post'
import { wpGraphqlClient } from 'libs/graphql'
import { getPosts } from 'types/graphql/post'
import { IServicePost } from 'usecases/post'

export class ServicePost implements IServicePost {
  async getPosts(page: number, perPage: number) {
    const offset = Math.max((page - 1) * perPage, 0)
    const res = await wpGraphqlClient.request(getPosts, {
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
