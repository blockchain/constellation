import { PXToRem } from 'utils'

import { colors } from '../../../colors'
import { ShapeTheme } from './Shape.theme'

const shapeLightTheme: ShapeTheme = {
  backgroundColor: {
    default: 'white',
    light: colors.grey000,
  },
  borderColor: {
    regular: colors.grey100,
  },
  borderRadius: {
    medium: 1,
  },
  borderWidth: {
    small: PXToRem(1),
  },
  boxShadow: {
    elevation1: '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
  },
}

export { shapeLightTheme }
