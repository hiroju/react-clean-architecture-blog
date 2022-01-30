import { extendTheme } from '@chakra-ui/react'

export const defaultTheme = extendTheme({
  colors: {
    // background: '#F3F0D7',
    background: '#F2F3EE',
  },
  styles: {
    global: {
      body: {
        bg: 'background',
      },
    },
  },
})
