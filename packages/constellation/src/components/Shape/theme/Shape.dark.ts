import { extendTheme } from 'theme'

import { colors } from '../../../colors'
import { shapeLightTheme } from './Shape.light'
import { ShapeTheme } from './Shape.theme'

const shapeDarkTheme: ShapeTheme = extendTheme(shapeLightTheme, {
  backgroundColor: {
    default: colors.dark900,
    light: colors.dark800,
  },
  borderColor: {
    regular: colors.dark500,
  },
})

export { shapeDarkTheme }
