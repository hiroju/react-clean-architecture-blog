import { Box } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { ServicePost } from 'services/post'
import { UsecasePost } from 'usecases/post'

export const Posts = () => {
  const servicePost = new ServicePost()
  const usecasePost = new UsecasePost(servicePost)
  const { data, isLoading } = useQuery(['posts'], async () => {
    return await usecasePost.getPosts(1)
  })
  if (isLoading) <div>...loading</div>
  console.log('data', data)
  const posts = data?.nodes || []

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Box p={'12'} key={post.id}>
            <p>{post.title}</p>
          </Box>
        ))}
    </div>
  )
}

export default Posts
