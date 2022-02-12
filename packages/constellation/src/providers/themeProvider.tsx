import React from 'react'
import { normalize } from 'stitches-normalize-css'

import { darkTheme, globalCss } from '../stitches.config'

const globalStyles = globalCss(...normalize)

const ThemeProvider = ({ children, theme }: Props): JSX.Element | null => {
  if (!children) {
    return null
  }

  globalStyles()

  return <div className={theme === 'dark' ? darkTheme : ''}>{children}</div>
}

type Props = {
  children: React.ReactChild
  theme: 'dark' | 'light'
}

export default ThemeProvider
