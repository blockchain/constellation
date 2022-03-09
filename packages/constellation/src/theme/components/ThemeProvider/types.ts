import { FC } from 'react'
import { Theme } from 'theme/types'

export type ThemeProviderProps = {
  theme: Theme
}

export type ThemeProviderComponent = FC<ThemeProviderProps>
