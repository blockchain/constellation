import React from 'react'
import { useTheme } from 'theme'

import { StyledScrollArea } from './ScrollableArea.styles'
import { ScrollableAreaComponent } from './ScrollableArea.types'

const ScrollableArea: ScrollableAreaComponent = ({ backgroundColor, children, shadowColor }) => {
  const theme = useTheme()

  const effectiveShadowColor = shadowColor || theme.scrollArea.shadowColor

  const effectiveBackgroundColor = backgroundColor || theme.background.colors.default

  return (
    <StyledScrollArea
      backgroundColor={effectiveBackgroundColor}
      b={effectiveShadowColor.b}
      g={effectiveShadowColor.g}
      r={effectiveShadowColor.r}
    >
      {children}
    </StyledScrollArea>
  )
}

export default ScrollableArea
