import { createThemeTypeChecker } from 'theme'

const isTextColor = createThemeTypeChecker((theme) => theme.text.colors)

export default isTextColor
