/* eslint-disable sort-keys */

import { Theme } from 'theme/theme.types'
import { PXToRem } from 'utils'

import { colors } from '../../colors'

export const theme: Theme = {
  background: {
    colors: {
      default: 'white',
      light: colors.grey000,
    },
  },
  button: {
    minimal: {
      active: {
        backgroundColor: colors.blue000,
        border: `1px solid ${colors.blue400}`,
      },

      default: {
        backgroundColor: 'transparent',
        border: `1px solid ${colors.grey100}`,
        borderRadius: PXToRem(8),
        icon: {
          color: colors.blue600,
        },

        text: {
          color: colors.blue600,
          fontWeigth: 'semibold',
        },
      },

      disabled: {
        border: `1px solid ${colors.grey100}`,

        icon: {
          color: colors.grey600,
        },

        text: {
          color: colors.grey600,
        },
      },

      focus: {
        backgroundColor: colors.blue000,
        border: `1px solid ${colors.blue400}`,
      },

      hover: {
        backgroundColor: colors.blue000,
        border: `1px solid ${colors.blue400}`,
      },

      loading: {
        icon: {
          color: colors.blue600,
        },
      },
    },
    primary: {
      active: {
        backgroundColor: colors.blue900,
      },

      default: {
        backgroundColor: colors.blue600,
        borderRadius: PXToRem(8),

        icon: {
          color: 'white',
        },

        text: {
          color: 'white',
          fontWeigth: 'semibold',
        },
      },
      disabled: {
        backgroundColor: colors.blue400,

        icon: {
          color: colors.white600,
        },

        text: {
          color: colors.white600,
        },
      },
      focus: {
        backgroundColor: colors.blue800,
      },
      hover: {
        backgroundColor: colors.blue700,
      },
      loading: {
        icon: {
          color: 'white',
        },
      },
    },
    secondary: {
      active: {
        backgroundColor: colors.grey900,
      },

      default: {
        backgroundColor: colors.grey800,
        borderRadius: PXToRem(8),

        icon: {
          color: 'white',
        },

        text: {
          color: 'white',
          fontWeigth: 'semibold',
        },
      },
      disabled: {
        backgroundColor: colors.grey500,

        icon: {
          color: colors.white600,
        },

        text: {
          color: colors.white600,
        },
      },
      focus: {
        backgroundColor: colors.grey900,
      },
      hover: {
        backgroundColor: colors.grey700,
      },
      loading: {
        icon: {
          color: 'white',
        },
      },
    },
    sizes: {
      default: {
        borderRadius: PXToRem(8),

        icon: {
          size: PXToRem(16),
        },

        loadingSpinner: {
          size: PXToRem(24),
        },

        padding: {
          horizontal: PXToRem(24),
          vertical: PXToRem(12),
        },

        text: {
          fontSize: PXToRem(16),
          lineHeight: PXToRem(24),
        },
      },
      large: {
        borderRadius: PXToRem(8),

        icon: {
          size: PXToRem(24),
        },

        loadingSpinner: {
          size: PXToRem(24),
        },
        padding: {
          horizontal: PXToRem(40),
          vertical: PXToRem(16),
        },
        text: {
          fontSize: PXToRem(20),
          lineHeight: PXToRem(30),
        },
      },
      small: {
        borderRadius: PXToRem(8),
        icon: {
          size: PXToRem(16),
        },
        loadingSpinner: {
          size: PXToRem(16),
        },
        padding: {
          horizontal: PXToRem(12),
          vertical: PXToRem(6),
        },
        text: {
          fontSize: PXToRem(14),
          lineHeight: PXToRem(20),
        },
      },
    },
  },
  clickableArea: {
    hover: {
      backgroundColor: colors.grey050,
    },
  },
  icon: {
    colors: {
      primary: colors.grey400,
    },
    sizes: {
      large: PXToRem(36),
      medium: PXToRem(24),
      small: PXToRem(16),
    },
  },
  scrollArea: {
    backgroundColor: 'white',
    shadowColor: { b: 0, g: 0, r: 0 },
  },
  separator: {
    colors: {
      default: colors.grey050,
    },
  },
  shape: {
    borderColor: {
      regular: colors.grey100,
    },
    borderRadius: {
      medium: PXToRem(16),
    },
    borderWidth: {
      small: PXToRem(1),
    },
    boxShadow: {
      elevation1: '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
    },
  },
  text: {
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
  },
}
