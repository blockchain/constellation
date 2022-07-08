import { FC } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  darkMode: boolean
  theme?: object
}

export type ThemeProviderComponent = FC<ThemeProviderProps>
