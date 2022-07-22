import { FC } from 'react'

import { PaletteColors, SemanticColors } from '../Base'

interface ThemeProviderProps {
  children: React.ReactNode
  colorMode: 'light' | 'dark'
  theme?: ThemeOverrides
}

export type ThemeProviderComponent = FC<ThemeProviderProps>

type SemanticKeys = keyof typeof SemanticColors
type PaletteKeys = keyof typeof PaletteColors

export type ThemeOverrides = Record<SemanticKeys | PaletteKeys, string>
