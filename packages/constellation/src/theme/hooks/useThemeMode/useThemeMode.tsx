import { UseThemeMode } from './types'

export const useThemeMode: UseThemeMode = ({ darkThemeData, lightThemeData, mode }) => {
  if (mode === 'auto') {
    return darkThemeData
  }

  if (mode === 'dark') {
    return darkThemeData
  }

  return lightThemeData
}
