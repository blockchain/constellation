/* eslint-disable sort-keys */

import { Theme } from 'theme/theme.types'
import { extendTheme } from 'theme/utils'

import { colors } from '../../colors'
import { theme } from './defaultTheme'

export const darkTheme: Theme = extendTheme(theme, {
  background: {
    colors: {
      default: colors.dark900,
      light: colors.dark800,
    },
  },
  button: {
    minimal: {
      active: {
        backgroundColor: colors.dark700,
        border: `1px solid ${colors.blue400}`,
      },

      default: {
        border: `1px solid ${colors.dark500}`,

        icon: {
          color: colors.blue400,
        },

        text: {
          color: colors.blue400,
        },
      },

      disabled: {
        border: `1px solid ${colors.grey700}`,

        icon: {
          color: colors.grey600,
        },

        text: {
          color: colors.grey600,
        },
      },

      focus: {
        backgroundColor: colors.dark700,
        border: `1px solid ${colors.blue400}`,
      },

      hover: {
        backgroundColor: colors.dark800,
        border: `1px solid ${colors.dark400}`,
      },
    },
  },
  clickableArea: {
    hover: {
      backgroundColor: colors.dark700,
    },
  },
  icon: {
    colors: {
      primary: colors.dark400,
    },
  },
  scrollArea: {
    backgroundColor: 'rgb(14, 18, 27)',
    shadowColor: { b: 214, g: 212, r: 210 },
  },
  separator: {
    colors: {
      default: colors.dark700,
    },
  },
  text: {
    colors: {
      error: colors.red400,
      primary: 'white',
      secondary: colors.dark200,
      success: colors.green400,
      warning: colors.orange400,
    },
  },
})
