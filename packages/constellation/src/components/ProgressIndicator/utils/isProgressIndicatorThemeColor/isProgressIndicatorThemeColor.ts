import { createThemeTypeChecker } from 'theme'

const isProgressIndicatorThemeColor = createThemeTypeChecker(
  (theme) => theme.progressIndicator.colors,
)

export default isProgressIndicatorThemeColor
