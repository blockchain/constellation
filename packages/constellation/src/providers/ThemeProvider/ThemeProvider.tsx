import React from 'react'
import { normalize } from 'stitches-normalize-css'

import { globalCss } from '../../stitches.config'
import { ThemeProviderComponent } from './types'

const normalizeStyles = globalCss(...normalize)

const ThemeProvider: ThemeProviderComponent = ({ children, theme }) => {
  normalizeStyles()

  return <div className={theme}>{children}</div>
}

export { ThemeProvider }
