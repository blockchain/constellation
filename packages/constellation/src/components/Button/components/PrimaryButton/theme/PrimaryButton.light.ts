import { colors } from '../../../../../colors'
import { PrimaryButtonTheme } from './PrimaryButton.theme'

const primaryLightButtonTheme: PrimaryButtonTheme = {
  active: {
    backgroundColor: colors.blue900,
  },
  backgroundColor: colors.blue600,
  borderRadius: 0.5,

  color: 'white',

  disabled: {
    backgroundColor: colors.blue400,
    color: colors.white600,
  },

  focused: {
    backgroundColor: colors.blue800,
  },

  hover: {
    backgroundColor: colors.blue700,
  },
}

export { primaryLightButtonTheme }
