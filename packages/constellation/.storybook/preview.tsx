import { themes } from '@storybook/theming'
import { ThemeProvider, ThemeMode, useThemeMode } from '../src'
import { useDarkMode } from 'storybook-dark-mode'
import { ColorMode } from '../src/stitches.config'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#121212' },
  },
}

export const decorators = [
  (Story) => {
    const themeMode: ThemeMode = useDarkMode() ? ColorMode.DARK : ColorMode.LIGHT

    const theme = useThemeMode(themeMode)

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  },
]
