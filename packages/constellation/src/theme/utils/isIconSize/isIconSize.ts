import { createThemeTypeChecker } from '../createThemeTypeChecker'

export const isIconSize = createThemeTypeChecker((theme) => theme.icon.sizes)
