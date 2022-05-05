import { createThemeTypeChecker } from '../createThemeTypeChecker'

export const isTextColor = createThemeTypeChecker((theme) => theme.text.colors)
