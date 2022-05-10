import { InterFontProvider } from 'components/Font'
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeProviderComponent } from './ThemeProvider.types'

const ThemeProvider: ThemeProviderComponent = ({ children, theme }) => (
  <StyledThemeProvider theme={theme}>
    <InterFontProvider>{children}</InterFontProvider>
  </StyledThemeProvider>
)

export default ThemeProvider
