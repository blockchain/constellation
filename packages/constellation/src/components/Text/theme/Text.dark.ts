import { extendTheme } from 'theme'

import { colors } from '../../../colors'
import { textLightTheme } from './Text.light'
import { TextTheme } from './Text.theme'

const textDarkTheme: TextTheme = extendTheme(textLightTheme, {
  colors: {
    error: colors.red400,
    primary: 'white',
    secondary: colors.dark200,
    success: colors.green400,
    warning: colors.orange400,
  },
})

export { textDarkTheme }
