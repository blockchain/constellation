import { InterFontProvider } from 'fonts'
import React from 'react'

import { ThemeProviderComponent } from './types'

export const ThemeProvider: ThemeProviderComponent = ({ children, theme }) => {
  return (
    <InterFontProvider>
      <div className={theme}>{children}</div>
    </InterFontProvider>
  )
}
