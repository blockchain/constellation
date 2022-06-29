import { FC } from 'react'
import { Theme } from 'theme/theme.types'

type ThemeProviderProps = { theme: Theme }

type ThemeProviderComponent = FC<ThemeProviderProps>

export type { ThemeProviderComponent, ThemeProviderProps }
