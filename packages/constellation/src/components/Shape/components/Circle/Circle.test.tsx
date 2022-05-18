import { render } from '@testing-library/react'
import React, { JSXElementConstructor, ReactElement } from 'react'
import { ThemeProvider } from 'theme'
import { lightTheme } from 'themes'

import { Circle } from '.'

describe('Circle', () => {
  const wrapper: JSXElementConstructor<{ children: ReactElement }> = ({ children }) => (
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
  )

  it('Should apply the size to the width, height and border radius based on size', () => {
    const { container } = render(<Circle size={2} />, {
      wrapper,
    })

    expect(container.firstChild).toHaveStyleRule('border-radius', '1rem')
    expect(container.firstChild).toHaveStyleRule('width', '2rem')
    expect(container.firstChild).toHaveStyleRule('height', '2rem')
  })

  it('Should not center the content when centerContent is not provided', () => {
    const { container } = render(<Circle />, {
      wrapper,
    })

    expect(container.firstChild).toHaveStyleRule('display', undefined)
    expect(container.firstChild).toHaveStyleRule('align-items', undefined)
    expect(container.firstChild).toHaveStyleRule('justify-content', undefined)
  })

  it('Should center the content when centerContent is provided', () => {
    const { container } = render(<Circle centerContent />, {
      wrapper,
    })

    expect(container.firstChild).toHaveStyleRule('display', 'flex')
    expect(container.firstChild).toHaveStyleRule('align-items', 'center')
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center')
  })
})
