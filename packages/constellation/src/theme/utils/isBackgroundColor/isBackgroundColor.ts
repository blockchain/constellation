import { createThemeTypeChecker } from '../createThemeTypeChecker'

const isBackgroundColor = createThemeTypeChecker((theme) => theme.background.colors)

export default isBackgroundColor
