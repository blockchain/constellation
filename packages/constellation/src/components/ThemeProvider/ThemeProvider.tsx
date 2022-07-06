/* eslint-disable import/no-unresolved */
import '../styles.css'

import React, { CSSProperties, useMemo } from 'react'

import { ThemeProviderComponent } from './ThemeProvider.types'

const ThemeProvider: ThemeProviderComponent = ({ children, theme, colorOverride = {} }) => {
  const colorOverrideStyles = useMemo((): CSSProperties => {
    return Object.keys(colorOverride).reduce(
      (newColorOverride, color) => ({
        ...newColorOverride,
        [`--color-${color}`]: colorOverride[color as keyof typeof colorOverride],
      }),
      {},
    )
  }, [colorOverride])

  return (
    <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'} style={colorOverrideStyles}>
      {children}
    </div>
  )
}

export default ThemeProvider
