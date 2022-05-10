import { PXToRem } from 'utils'

import { colors } from '../../../colors'
import { IconTheme } from './IconTheme.types'

const iconLightTheme: IconTheme = {
  colors: {
    primary: colors.grey400,
  },
  sizes: {
    large: PXToRem(36),
    medium: PXToRem(24),
    small: PXToRem(16),
  },
}

export { iconLightTheme }
