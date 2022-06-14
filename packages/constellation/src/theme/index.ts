import { extendTheme } from '@chakra-ui/react'

import { colors } from '../colors'
import { ButtonTheme } from '../components'

export const theme = extendTheme({
  colors,
  components: {
    Button: ButtonTheme,
  },
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
  },
})
