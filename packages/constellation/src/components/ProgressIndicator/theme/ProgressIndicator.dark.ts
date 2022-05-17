import { extendTheme } from 'theme'

import { colors } from '../../../colors'
import { progressIndicatorLightTheme } from './ProgressIndicator.light'
import { ProgressIndicatorTheme } from './ProgressIndicator.theme'

const progressIndicatorDarkTheme: ProgressIndicatorTheme = extendTheme(
  progressIndicatorLightTheme,
  {
    colors: {
      primary: colors.blue400,
    },
  },
)

export { progressIndicatorDarkTheme }
