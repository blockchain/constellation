import { createThemeTypeChecker } from 'theme'

export const isIconSize = createThemeTypeChecker((theme) => theme.icon.sizes)
