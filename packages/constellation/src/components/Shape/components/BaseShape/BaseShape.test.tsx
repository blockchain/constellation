import { render } from '@testing-library/react'
import React, { JSXElementConstructor, ReactElement } from 'react'
import { ThemeProvider } from 'theme'
import { darkTheme, lightTheme } from 'themes'

import { colors } from '../../../../colors'
import BaseShape from './BaseShape'

describe('BaseShape', () => {
  describe('on light theme', () => {
    const wrapper: JSXElementConstructor<{ children: ReactElement }> = ({ children }) => (
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    )

    it('Should not apply any property it not defined', () => {
      const { container } = render(<BaseShape />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('background-color', 'inherit')
      expect(container.firstChild).toHaveStyleRule('border-color', 'inherit')
      expect(container.firstChild).toHaveStyleRule('box-shadow', undefined)
      expect(container.firstChild).toHaveStyleRule('border-width', undefined)
      expect(container.firstChild).toHaveStyleRule('border-style', undefined)
    })

    it('Should apply the default background color', () => {
      const { container } = render(<BaseShape backgroundColor='default' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('background-color', 'white')
    })

    it('Should apply the light background color', () => {
      const { container } = render(<BaseShape backgroundColor='light' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('background-color', colors.grey050)
    })

    it('Should allow for custom background color', () => {
      const { container } = render(<BaseShape backgroundColor='#ff00ff' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('background-color', '#ff00ff')
    })

    it('Should apply the regular border color', () => {
      const { container } = render(<BaseShape borderColor='regular' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-color', colors.grey100)
    })

    it('Should allow for custom border color', () => {
      const { container } = render(<BaseShape borderColor='#ff00ff' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-color', '#ff00ff')
    })

    it('Should apply the elevation 1 box shadow', () => {
      const { container } = render(<BaseShape boxShadow='elevation1' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule(
        'box-shadow',
        '0px 3px 8px rgba(0,0,0,0.12),0px 3px 1px rgba(0,0,0,0.04)',
      )
    })

    it('Should allow for custom box shadow', () => {
      const { container } = render(<BaseShape boxShadow='0px 2px 2px rgba(15,15,15,0.12)' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('box-shadow', '0px 2px 2px rgba(15,15,15,0.12)')
    })

    it('Should apply the small border width', () => {
      const { container } = render(<BaseShape borderWidth='small' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-width', '0.0625rem')
      expect(container.firstChild).toHaveStyleRule('border-style', 'solid')
    })

    it('Should allow for custom border width', () => {
      const { container } = render(<BaseShape borderWidth={1} />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-width', '1rem')
      expect(container.firstChild).toHaveStyleRule('border-style', 'solid')
    })
  })

  describe('on dark theme', () => {
    const wrapper: JSXElementConstructor<{ children: ReactElement }> = ({ children }) => (
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    )

    it('Should apply the default background color', () => {
      const { container } = render(<BaseShape backgroundColor='default' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('background-color', colors.dark900)
    })

    it('Should apply the regular border color', () => {
      const { container } = render(<BaseShape borderColor='regular' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-color', colors.dark500)
    })

    it('Should apply the elevation 1 box shadow', () => {
      const { container } = render(<BaseShape boxShadow='elevation1' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule(
        'box-shadow',
        '0px 3px 8px rgba(0,0,0,0.12),0px 3px 1px rgba(0,0,0,0.04)',
      )
    })
  })
})
