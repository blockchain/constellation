import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls'
import React from 'react'
import { ThemeProvider } from '../src'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import DocsContainer from './DocsContainer'
import '../src/input.css'

const blockchain = {
  brandTitle: 'Blockchain',
  brandUrl: 'https://blockchain.com',
  brandTarget: '_blank',
}

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, ...blockchain, brandImage: '/logoDark.svg', appContentBg: '#2f2f2f' },
    light: {
      ...themes.normal,
      ...blockchain,
      brandImage: '/logoLight.svg',
      appContentBg: '#FFFFFF',
    },
  },
  docs: {
    container: DocsContainer,
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Sets the custom theme colors.',
    control: { type: 'object' },
  },
}

const withDisplayGlobals = withGlobals((Story, globalValues) => {
  const darkMode = useDarkMode()

  return (
    <ThemeProvider colorMode={darkMode ? 'dark' : 'light'} theme={globalValues.theme}>
      <Story />
    </ThemeProvider>
  )
})

export const decorators = [withDisplayGlobals]
