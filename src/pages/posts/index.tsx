import { Box } from '@chakra-ui/react'
import { PostDetailContent } from 'components/post/detail-content'
import { useQuery } from 'react-query'
import { TemplateHeaderPage } from 'templates/header-page'
import { usecasePost } from 'usecases/instances'

export const Posts = () => {
  const { data, isLoading } = useQuery(['posts'], async () => {
    return await usecasePost.getPosts(1)
  })
  if (isLoading) <div>...loading</div>
  console.log('data', data)
  const posts = data?.nodes || []
  const content = (
    <PostDetailContent>
      {posts &&
        posts.map((post) => (
          <Box key={post.id}>
            <p>{post.title}</p>
          </Box>
        ))}
    </PostDetailContent>
  )
  return <TemplateHeaderPage content={content} />
}

export default Posts
