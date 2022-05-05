import { createThemeTypeChecker } from '../createThemeTypeChecker'

export const isIconColor = createThemeTypeChecker((theme) => theme.icon.colors)
