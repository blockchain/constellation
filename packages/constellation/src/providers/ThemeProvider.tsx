import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { normalize } from 'stitches-normalize-css'

import { ColorMode, globalCss, themes } from '../stitches.config'

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

type ThemeContextValue = {
  setColorMode: (newValue: ColorMode) => void
}

const ThemeContext = createContext<Partial<ThemeContextValue>>({})

const ThemeProvider = ({ children }: Props) => {
  const [colorMode, setColorMode] = useState<ColorMode>(ColorMode.LIGHT)

  useEffect(() => {
    const root = document.documentElement

    const initialColorMode = root.classList.contains(themes[ColorMode.DARK])
      ? ColorMode.DARK
      : ColorMode.LIGHT

    setColorMode(initialColorMode)
  }, [])

  const value = useMemo(() => {
    const setColorMode = (newColorMode: ColorMode): void => {
      document.documentElement.classList.remove(themes[colorMode])

      document.documentElement.classList.add(themes[newColorMode])

      setColorMode(newColorMode)
    }

    return {
      setColorMode,
    }
  }, [colorMode])

  normalizeStyles()

  fontStyles()

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

type Props = {
  children: ReactNode
}

export { ColorMode, ThemeContext }

export default ThemeProvider
