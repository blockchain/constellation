import { extendTheme } from 'theme'

import { colors } from '../../../colors'
import { iconLightTheme } from './IconTheme.light'
import { IconTheme } from './IconTheme.types'

const iconDarkTheme: IconTheme = extendTheme(iconLightTheme, {
  colors: {
    primary: colors.dark400,
  },
})

export { iconDarkTheme }
