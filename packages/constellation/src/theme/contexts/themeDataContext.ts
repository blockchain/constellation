import { createContext } from 'react'
import { ThemeData } from 'theme/types'

export const ThemeDataContext = createContext<ThemeData>({} as ThemeData)
