import { themes } from '@storybook/theming'
import { ThemeProvider, ThemeMode, useThemeMode, InterFontProvider } from '../src'
import { useDarkMode } from 'storybook-dark-mode'
import React from 'react'

const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#121212' },
  },
}

const decorators = [
  (Story) => {
    const themeMode: ThemeMode = useDarkMode() ? 'dark' : 'light'

    const theme = useThemeMode(themeMode)

    return (
      <ThemeProvider theme={theme}>
        <InterFontProvider>
          <Story />
        </InterFontProvider>
      </ThemeProvider>
    )
  },
]

export { parameters, decorators }
