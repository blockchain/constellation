import { createThemeTypeChecker } from '../createThemeTypeChecker'

const isBoderColor = createThemeTypeChecker((theme) => theme.shape.borderColor)

export default isBoderColor
