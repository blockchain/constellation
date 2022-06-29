import './output.css'

import React, { PropsWithChildren } from 'react'
import { Theme } from 'theme/theme.types'

type Props = PropsWithChildren<{
  theme: Theme
}>

const ThemeProvider = ({ children, theme }: Props) => {
  return <div className={theme === 'dark' ? 'theme-dark' : 'theme-light'}>{children}</div>
}

export default ThemeProvider
