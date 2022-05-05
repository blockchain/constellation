import { theme } from '../../themes/defaultTheme'
import { ThemeSelectorUtility } from './createThemeTypeChecker.types'

const createThemeTypeChecker = <T extends { [key: string]: unknown }, U extends keyof T = keyof T>(
  themeSelector: ThemeSelectorUtility<T>,
) => {
  const keys = Object.keys(themeSelector(theme))

  return (value: U | string | number | undefined): value is U =>
    value !== undefined && keys.includes(value.toString())
}

export default createThemeTypeChecker
