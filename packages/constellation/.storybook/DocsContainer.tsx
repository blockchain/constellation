import React from 'react'
import { DocsContainer } from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'

export const DarkModeDocsContainer: typeof DocsContainer = ({ children, context }) => {
  const dark = useDarkMode()

  return (
    <DocsContainer
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
    </DocsContainer>
  )
}

export default DarkModeDocsContainer
