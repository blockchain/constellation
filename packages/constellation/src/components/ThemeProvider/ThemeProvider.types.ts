import { FC } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  colorMode: 'light' | 'dark'
  theme?: object
}

export type ThemeProviderComponent = FC<ThemeProviderProps>
