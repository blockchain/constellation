import React from 'react'
import { themeContext } from 'theme/context'

import { ThemeProviderComponent } from './types'

const ThemeProvider: ThemeProviderComponent = ({ children, theme }) => {
  const { Provider } = themeContext

  return <Provider value={theme}>{children}</Provider>
}

export { ThemeProvider }
