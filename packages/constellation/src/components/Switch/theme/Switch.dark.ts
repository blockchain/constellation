import { extendTheme } from 'theme'

import { colors } from '../../../colors'
import { switchLightTheme } from './Switch.light'
import { SwitchTheme } from './Switch.theme'

const switchDarkTheme: SwitchTheme = extendTheme(switchLightTheme, {
  colors: {
    primary: {
      backgroundColor: colors.blue400,
      thumbColor: colors.dark900,
    },
    secondary: {
      backgroundColor: colors.green400,
      thumbColor: colors.dark900,
    },
  },
  disabled: {
    backgroundColor: colors.dark600,
    thumbColor: colors.dark900,
  },
})

export { switchDarkTheme }
