/* eslint-disable import/no-unresolved */
import '../styles.css'

import React, { useEffect } from 'react'

import { DarkModeContext } from './themeContext'
import { ThemeProviderComponent } from './ThemeProvider.types'

const ThemeProvider: ThemeProviderComponent = ({ children, theme, colorOverride = {} }) => {
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('theme-dark')
      document.body.classList.remove('theme-light')
    } else {
      document.body.classList.add('theme-light')
      document.body.classList.remove('theme-dark')
    }

    const colorOverrideStyles = Object.keys(colorOverride).reduce(
      (newColorOverride, color) =>
        `${newColorOverride} --color-${color}: ${
          colorOverride[color as keyof typeof colorOverride]
        };`,
      '',
    )

    document.body.style.cssText = colorOverrideStyles
  }, [colorOverride, theme])

  return <DarkModeContext.Provider value={theme === 'dark'}>{children}</DarkModeContext.Provider>
}

export default ThemeProvider
