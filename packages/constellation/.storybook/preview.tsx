import { themes } from '@storybook/theming'
import { ThemeProvider, ThemeMode, useThemeMode } from '../src'
import { useDarkMode } from 'storybook-dark-mode'

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
        <Story />
      </ThemeProvider>
    )
  },
]

export { parameters, decorators }
