import { Box, Container } from '@chakra-ui/react'
import { Header } from 'containers/header'
import { ReactNode } from 'react'

type TemplateHeaderPageProps = {
  content: ReactNode
}
export const TemplateHeaderPage = (props: TemplateHeaderPageProps) => {
  const { content } = props
  return (
    <Box>
      <Box mb={'3'}>
        <Header />
      </Box>
      <Container maxW='container.lg'>{content}</Container>
    </Box>
  )
}
