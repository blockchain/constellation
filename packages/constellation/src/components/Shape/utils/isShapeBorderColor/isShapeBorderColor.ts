import { createThemeTypeChecker } from 'theme'

export const isShapeBorderColor = createThemeTypeChecker((theme) => theme.shape.borderColor)
