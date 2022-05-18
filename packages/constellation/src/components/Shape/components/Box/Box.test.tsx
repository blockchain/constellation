import { render } from '@testing-library/react'
import { Box } from 'components'
import React, { JSXElementConstructor, ReactElement } from 'react'
import { ThemeProvider } from 'theme'
import { lightTheme } from 'themes'

describe('Box', () => {
  describe('on light theme', () => {
    const wrapper: JSXElementConstructor<{ children: ReactElement }> = ({ children }) => (
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    )

    it('Should not apply sny style if not defined', () => {
      const { container } = render(<Box />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-radius', undefined)
      expect(container.firstChild).toHaveStyleRule('width', undefined)
      expect(container.firstChild).toHaveStyleRule('height', undefined)
    })

    it('Should apply the medium border radius from the theme', () => {
      const { container } = render(<Box borderRadius='medium' />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-radius', '1rem')
    })

    it('Should allow custom border radius in rem', () => {
      const { container } = render(<Box borderRadius={7} />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('border-radius', '7rem')
    })

    it('Should apply full width', () => {
      const { container } = render(<Box fullWidth />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('width', '100%')
    })

    it('Should apply exect width in rem', () => {
      const { container } = render(<Box width={2} />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('width', '2rem')
    })

    it('Should apply full height', () => {
      const { container } = render(<Box fullHeight />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('height', '100%')
    })

    it('Should apply exect height in rem', () => {
      const { container } = render(<Box height={2} />, {
        wrapper,
      })

      expect(container.firstChild).toHaveStyleRule('height', '2rem')
    })
  })
})
