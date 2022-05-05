import React from 'react'
import { useTheme } from 'theme'

import { StyledClickableArea } from './ClickableArea.styles'
import { ClickableAreaComponent } from './ClickableArea.types'

const ClickableArea: ClickableAreaComponent = ({ children, hoverBackgroundColor, onClick }) => {
  const theme = useTheme()

  return (
    <StyledClickableArea
      showBackgroundOnHover={!!onClick}
      onClick={onClick}
      hoverBackgroundColor={hoverBackgroundColor || theme.clickableArea.hover.backgroundColor}
    >
      {children}
    </StyledClickableArea>
  )
}

export default ClickableArea
