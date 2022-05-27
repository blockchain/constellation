import { colors } from '../../../../../colors'
import { MinimalButtonTheme } from './MinimalButton.theme'

const minimalLightButtonTheme: MinimalButtonTheme = {
  active: {
    backgroundColor: colors.blue000,
    borderColor: colors.blue600,
  },
  backgroundColor: 'white',
  borderColor: colors.grey100,
  borderRadius: 0.5,
  color: colors.blue600,

  disabled: {
    backgroundColor: 'white',
    borderColor: colors.grey100,
    color: colors.grey600,
  },

  focused: {
    backgroundColor: colors.blue000,
    borderColor: colors.blue600,
  },

  hover: {
    backgroundColor: colors.blue000,
    borderColor: colors.blue600,
  },

  overlay: {
    backgroundColor: colors.grey100,
    borderColor: colors.blue600,
    color: colors.blue600,
  },
}

export { minimalLightButtonTheme }
