import { colors } from '../../../colors'
import { SwitchTheme } from './Switch.theme'

const switchLightTheme: SwitchTheme = {
  colors: {
    primary: {
      backgroundColor: colors.blue600,
      thumbColor: 'white',
    },
    secondary: {
      backgroundColor: colors.green600,
      thumbColor: 'white',
    },
  },
  disabled: {
    backgroundColor: colors.grey300,
    thumbColor: 'white',
  },
  sizes: {
    default: {
      height: 1.5,
      thumbSize: 1.25,
      width: 3,
    },
  },
}

export { switchLightTheme }
