import { themes } from '@storybook/theming'
import { ThemeProvider } from '../src'
import { useDarkMode } from 'storybook-dark-mode'

const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#0E121B' },
  },
}

type ThemeMode = 'auto' | 'dark' | 'light'

const decorators = [
  (Story) => {
    const themeMode: ThemeMode = useDarkMode() ? 'dark' : 'light'

    return (
      <ThemeProvider theme={themeMode}>
        <Story />
      </ThemeProvider>
    )
  },
]

export { parameters, decorators }
