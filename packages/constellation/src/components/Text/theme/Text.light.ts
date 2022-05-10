import { PXToRem } from 'utils'

import { colors } from '../../../colors'
import { TextTheme } from './Text.theme'

const textLightTheme: TextTheme = {
  colors: {
    error: colors.red900,
    info: colors.blue900,
    primary: colors.grey900,
    secondary: colors.grey600,
    success: colors.green900,
    warning: colors.orange900,
  },
  loading: {
    backgroundColor: colors.grey100,
    borderRadius: PXToRem(4),
    maxWidth: PXToRem(200),
  },
  weights: {
    medium: 500,
    regular: 400,
    semibold: 600,
  },
}

export { textLightTheme }
