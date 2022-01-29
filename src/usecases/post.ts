import { EntityPost } from 'entities/post'
import { PaginationResult } from 'types/pagination'

export interface IServicePost {
  getPosts(page: number, perPage: number): Promise<PaginationResult<EntityPost>>
}

export class UsecasePost {
  private postService: IServicePost
  constructor(postService: IServicePost) {
    this.postService = postService
  }
  getPosts(page: number, perPage: number = 10) {
    return this.postService.getPosts(page, perPage)
  }
}
