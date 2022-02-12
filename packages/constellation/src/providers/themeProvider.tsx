import { styled } from '@stitches/react'
import React from 'react'
import { normalize } from 'stitches-normalize-css'

import { darkTheme, globalCss, theme } from '../stitches.config'

const globalStyles = globalCss(...normalize)

// TODO: this might be a bad idea?
const Wrapper = styled('div', { backgroundColor: theme.colors.white900 })

const ThemeProvider = ({ children, theme }: Props): JSX.Element | null => {
  if (!children) {
    return null
  }

  globalStyles()

  return <Wrapper className={theme === 'dark' ? darkTheme : ''}>{children}</Wrapper>
}

type Props = {
  children: React.ReactChild
  theme: 'dark' | 'light'
}

export default ThemeProvider
