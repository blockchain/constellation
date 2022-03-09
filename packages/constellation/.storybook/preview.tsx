import { themes } from '@storybook/theming'
import { createDarkTheme, createLightTheme, ThemeProvider, InterFontLink } from '../src'
import { useDarkMode } from 'storybook-dark-mode'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#121212' },
  },
}

export const decorators = [
  (Story) => (
    <>
      <InterFontLink />

      <ThemeProvider theme={useDarkMode() ? createDarkTheme() : createLightTheme()}>
        <Story />
      </ThemeProvider>
    </>
  ),
]
