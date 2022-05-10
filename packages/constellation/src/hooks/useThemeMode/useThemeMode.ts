import { darkTheme, lightTheme } from 'themes'

import { UseThemeMode } from './types'

const useThemeMode: UseThemeMode = (mode) => {
  if (mode === 'auto') {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    return isDarkMode ? darkTheme : lightTheme
  }

  if (mode === 'dark') {
    return darkTheme
  }

  return lightTheme
}

export default useThemeMode
