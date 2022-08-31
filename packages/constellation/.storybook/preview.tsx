import { withGlobals } from '@luigiminardim/storybook-addon-globals-controls'
import React from 'react'
import { ThemeProvider } from '../src'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import '../src/input.css'

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode()

  return (
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id)
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark
                  ? { ...themes.dark, appContentBg: '#2f2f2f' }
                  : { ...themes.normal, appContentBg: '#FFFFFF' },
              },
            },
          }
        },
      }}
    >
      {children}
    </BaseContainer>
  )
}

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appContentBg: '#2f2f2f' },
    light: { ...themes.normal, appContentBg: '#FFFFFF' },
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
