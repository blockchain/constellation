import { colors } from 'colors'
import { ThemeData } from 'theme/types'

import { CreateBaseThemeData } from './types'

export const createBaseThemeData: CreateBaseThemeData = (overwrites) => {
  const baseTheme: ThemeData = {
    colors,
    fontSizes: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
    },
    fonts: {
      inter:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
      pill: '20%',
      round: '50%',
    },
    sizes: {
      16: '16px',
      24: '24px',
      32: '32px',
      4: '4px',
      40: '40px',
      48: '48px',
      64: '64px',
      72: '64px',
      8: '8px',
      80: '80px',
    },
    space: {
      120: '120px',
      16: '16px',
      24: '24px',
      32: '32px',
      4: '4px',
      40: '40px',
      48: '48px',
      64: '64px',
      8: '8px',
      80: '80px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    ...overwrites,
  }

  return baseTheme
}
