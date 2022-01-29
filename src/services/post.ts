import { wpGraphqlClient } from 'libs/graphql'
import { getPosts } from 'types/graphql/post'
import { IServicePost } from 'usecases/post'

export class ServicePost implements IServicePost {
  async getPosts() {
    const data = await wpGraphqlClient.request(getPosts)
    console.log('get posts', data)
    return []
  }
}
