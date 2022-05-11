import { themes } from '@storybook/theming'
import { ThemeProvider, ThemeMode, useThemeMode, colors } from '../src'
import { useDarkMode } from 'storybook-dark-mode'

const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: colors.dark900 },
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
