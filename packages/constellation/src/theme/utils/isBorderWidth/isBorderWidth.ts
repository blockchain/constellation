import { createThemeTypeChecker } from '../createThemeTypeChecker'

const isBorderWidth = createThemeTypeChecker((theme) => theme.shape.borderWidth)

export default isBorderWidth
