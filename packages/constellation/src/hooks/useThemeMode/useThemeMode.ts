import { ColorMode, darkTheme, lightTheme } from '../../stitches.config'
import { UseThemeMode } from './types'

export const useThemeMode: UseThemeMode = (mode) => {
  if (mode === 'auto') {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    return isDarkMode ? darkTheme : lightTheme
  }

  if (mode === 'dark') {
    return darkTheme
  }

  return lightTheme
}
