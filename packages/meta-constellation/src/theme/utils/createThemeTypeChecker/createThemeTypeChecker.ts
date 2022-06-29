import { Theme } from '../../theme.types'
import { ThemeSelectorUtility } from './createThemeTypeChecker.types'

const createThemeTypeChecker = <T extends { [key: string]: unknown }, U extends keyof T = keyof T>(
  themeSelector: ThemeSelectorUtility<T>,
) => {
  return (theme: Theme, value: U | string | number | undefined): value is U => {
    const keys = Object.keys(themeSelector(theme))

    return value !== undefined && keys.includes(value.toString())
  }
}

export default createThemeTypeChecker
