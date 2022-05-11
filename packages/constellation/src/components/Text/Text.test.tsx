import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'theme'
import { lightTheme } from 'themes'

import { Text } from '.'

describe('Text Component', () => {
  test('Render with no errors', () => {
    render(<Text>Text</Text>, {
      wrapper: ({ children }) => <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>,
    })

    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
