import { FC } from 'react'

import { createTheme } from '../../stitches.config'

export type ThemeProviderProps = {
  theme: ReturnType<typeof createTheme>
}

export type ThemeProviderComponent = FC<ThemeProviderProps>
