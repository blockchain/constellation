import { useContext } from 'react'
import { themeContext } from 'theme/context'

export const useTheme = () => useContext(themeContext)
