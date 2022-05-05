import { createContext } from 'react'
import { Theme } from 'theme/theme.types'

import { theme } from './themes'

export const themeContext = createContext<Theme>(theme)
