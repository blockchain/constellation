/* eslint-disable import/no-unresolved */
import '../styles.css'

import React, { useEffect } from 'react'

import { ThemeProviderComponent } from './ThemeProvider.types'

const ThemeProvider: ThemeProviderComponent = ({ children, colorMode = 'light', theme = {} }) => {
  useEffect(() => {
    document.body.classList.add(`mode-${colorMode}`)
    document.body.classList.remove(colorMode === 'dark' ? 'mode-light' : 'mode-dark')

    const themeStyles = Object.keys(theme).reduce(
      (newTheme, color) => `${newTheme} --color-${color}: ${theme[color as keyof typeof theme]};`,
      '',
    )

    document.body.style.cssText = themeStyles
  }, [theme, colorMode])

  return <>{children}</>
}

export default ThemeProvider
