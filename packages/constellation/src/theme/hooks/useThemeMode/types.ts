import { Theme, ThemeMode } from 'theme/types'

export type UseThemeMode = (options: {
  darkThemeData: Theme
  lightThemeData: Theme
  mode: ThemeMode
}) => Theme
