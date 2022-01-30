import { ServicePost } from 'services/post'
import { UsecasePost } from 'usecases/post'

const servicePost = new ServicePost()
const usecasePost = new UsecasePost(servicePost)

export { usecasePost }
