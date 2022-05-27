import { colors } from '../../../../../colors'
import { MinimalButtonTheme } from './MinimalButton.theme'

const minimalDarkButtonTheme: MinimalButtonTheme = {
  active: {
    backgroundColor: colors.dark700,
    borderColor: colors.blue400,
  },
  backgroundColor: colors.dark900,
  borderColor: colors.dark500,
  borderRadius: 0.5,
  color: colors.blue400,
  disabled: {
    backgroundColor: colors.dark900,
    borderColor: colors.grey700,
    color: colors.grey600,
  },
  focused: {
    backgroundColor: colors.dark700,
    borderColor: colors.blue400,
  },
  hover: {
    backgroundColor: colors.dark800,
    borderColor: colors.dark400,
  },
  overlay: {
    backgroundColor: colors.dark900,
    borderColor: colors.dark500,
    color: colors.blue400,
  },
}

export { minimalDarkButtonTheme }
