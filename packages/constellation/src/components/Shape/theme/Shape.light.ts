import { createElevationShadowFromHexColor, PXToRem } from 'utils'

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
    elevation1: createElevationShadowFromHexColor({
      color: colors.black,
      elevation: 1,
    }),
  },
}

export { shapeLightTheme }
