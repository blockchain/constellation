import { FC } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  colorOverride: {
    primary?: string
  }
  theme: string
}

export type ThemeProviderComponent = FC<ThemeProviderProps>
