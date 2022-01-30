import {
  Box,
  Container,
  Heading,
  HStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box bg={'#B1D1C5'} borderBottom={'1px'} borderColor={'gray.200'}>
      <Container maxW={'container.lg'}>
        <HStack justify={'space-between'} py={'3'}>
          <Heading size={'md'}>ブログタイトル</Heading>
          <Wrap>
            <WrapItem>top</WrapItem>
            <WrapItem>profile</WrapItem>
          </Wrap>
        </HStack>
      </Container>
    </Box>
  )
}
