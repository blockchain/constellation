import { styled } from '@stitches/react'
import React from 'react'
import { normalize } from 'stitches-normalize-css'

import { darkTheme, globalCss, theme } from '../stitches.config'

const normalizeStyles = globalCss(...normalize)

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix, import/no-unresolved */
const fontStyles = globalCss({
  '@import': "url('https://rsms.me/inter/inter.css')",
  html: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  '@supports (font-variation-settings: normal)': {
    html: {
      fontFamily:
        "'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
})
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

// TODO: this might be a bad idea?
const Wrapper = styled('div', { backgroundColor: theme.colors.white900 })

const ThemeProvider = ({ children, theme }: Props): JSX.Element | null => {
  if (!children) {
    return null
  }

  normalizeStyles()

  fontStyles()

  return <Wrapper className={theme === 'dark' ? darkTheme : ''}>{children}</Wrapper>
}

type Props = {
  children: React.ReactChild
  theme: 'dark' | 'light'
}

export default ThemeProvider
