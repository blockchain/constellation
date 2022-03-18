import React from 'react'

import { ThemeProviderComponent } from './types'

const ThemeProvider: ThemeProviderComponent = ({ children, theme }) => (
  <div className={theme}>{children}</div>
)

export { ThemeProvider }
