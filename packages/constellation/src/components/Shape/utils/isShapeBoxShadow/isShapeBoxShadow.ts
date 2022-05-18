import { createThemeTypeChecker } from 'theme'

export const isShapeBoxShadow = createThemeTypeChecker((theme) => theme.shape.boxShadow)
