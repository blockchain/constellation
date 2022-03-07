import { themes } from '@storybook/theming'
import { ThemeProvider } from '../src'
import { useDarkMode } from 'storybook-dark-mode'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#121212' },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? 'dark' : 'light'}>
      <Story />
    </ThemeProvider>
  ),
]
