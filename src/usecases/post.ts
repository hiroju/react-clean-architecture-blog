import { EntityPost } from 'entities/post'

export interface IServicePost {
  getPosts(): Promise<EntityPost[]>
}

export class UsecasePost {
  private postService: IServicePost
  constructor(postService: IServicePost) {
    this.postService = postService
  }
  getPosts() {
    return this.postService.getPosts()
  }
}
