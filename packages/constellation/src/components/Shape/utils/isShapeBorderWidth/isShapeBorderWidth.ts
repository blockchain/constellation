import { createThemeTypeChecker } from 'theme'

export const isShapeBorderWidth = createThemeTypeChecker((theme) => theme.shape.borderWidth)
