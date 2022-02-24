import { useContext } from 'react'

import { ThemeContext } from '../providers/ThemeProvider'

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  const { setColorMode } = context

  return { setColorMode }
}

export default useTheme
