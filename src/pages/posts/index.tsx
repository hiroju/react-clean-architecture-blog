import { useQuery } from 'react-query'
import { ServicePost } from 'services/post'
import { UsecasePost } from 'usecases/post'

export const Posts = () => {
  const servicePost = new ServicePost()
  const usecasePost = new UsecasePost(servicePost)
  const { data, isLoading } = useQuery(['posts'], () => {
    return usecasePost.getPosts()
  })
  if (isLoading) <div>...loading</div>
  console.log('data', data)
  return <div>aaa</div>
}

export default Posts
