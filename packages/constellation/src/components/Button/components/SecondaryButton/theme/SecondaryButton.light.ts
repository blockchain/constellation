import { colors } from '../../../../../colors'
import { SecondaryButtonTheme } from './SecondaryButton.theme'

const secondaryLightButtonTheme: SecondaryButtonTheme = {
  active: {
    backgroundColor: colors.grey900,
  },
  backgroundColor: colors.grey800,
  borderRadius: 0.5,

  color: 'white',

  disabled: {
    backgroundColor: colors.grey500,
    color: colors.white600,
  },

  focused: {
    backgroundColor: colors.grey900,
  },

  hover: {
    backgroundColor: colors.grey700,
  },
}

export { secondaryLightButtonTheme }
