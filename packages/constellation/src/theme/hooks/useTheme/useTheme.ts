import { useContext } from 'react'
import { ThemeDataContext } from 'theme/contexts'

import { UseTheme } from './types'

export const useTheme: UseTheme = () => {
  const theme = useContext(ThemeDataContext)

  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return theme
}
