import { createThemeTypeChecker } from 'theme'

export const isShapeBorderRadius = createThemeTypeChecker((theme) => theme.shape.borderRadius)
