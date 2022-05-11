import { createThemeTypeChecker } from 'theme'

export const isIconColor = createThemeTypeChecker((theme) => theme.icon.colors)
