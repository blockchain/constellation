import React from 'react'
import { normalize } from 'stitches-normalize-css'

import { globalCss } from '../../stitches.config'
import { ThemeProviderComponent } from './types'

const normalizeStyles = globalCss(...normalize)

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix, import/no-unresolved */
const fontStyles = globalCss({
  '@import': "url('https://rsms.me/inter/inter.css')",
  html: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  '@supports (font-variation-settings: normal)': {
    html: {
      fontFamily:
        "'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
})
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

const ThemeProvider: ThemeProviderComponent = ({ children, theme }) => {
  normalizeStyles()

  fontStyles()

  return <div className={theme}>{children}</div>
}

export { ThemeProvider }
