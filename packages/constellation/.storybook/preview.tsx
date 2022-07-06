import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls'
import React from 'react'
import { ThemeProvider } from '../src'

export const globalTypes = {
  darkMode: {
    name: 'Dark Mode',
    description: 'Sets the dark mode.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  colorOverride: {
    name: 'Color Override',
    description: 'Sets the color override.',
    defaultValue: {},
    control: { type: 'object' },
  },
}

const withDisplayGlobals = withGlobals((Story, globalValues) => (
  <ThemeProvider
    theme={globalValues.darkMode ? 'dark' : 'light'}
    colorOverride={globalValues.colorOverride}
  >
    <Story />
  </ThemeProvider>
))

export const decorators = [withDisplayGlobals]
