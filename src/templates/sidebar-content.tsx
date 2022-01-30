import { Box, HStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

type SidebarContentProps = {
  content: ReactNode
  sidebar: ReactNode
}
export const SidebarContent = (props: SidebarContentProps) => {
  const { content, sidebar } = props
  return (
    <HStack justify={'space-between'}>
      <Box width={'container.lg.md'}>{content}</Box>
      <Box width={'300px'}>{sidebar}</Box>
    </HStack>
  )
}
