import { darkTheme, theme } from 'theme'

import { ThemeModeHook } from './types'

const useThemeMode: ThemeModeHook = (mode) => {
  if (mode === 'auto') {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    return isDarkMode ? darkTheme : theme
  }

  if (mode === 'dark') {
    return darkTheme
  }

  return theme
}

export default useThemeMode
