import { createThemeTypeChecker } from 'theme'

export const isShapeBackgroundColor = createThemeTypeChecker((theme) => theme.shape.backgroundColor)
