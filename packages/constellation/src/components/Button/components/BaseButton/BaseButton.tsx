import { useFont } from 'components/Font'
import React, { useMemo } from 'react'

import { ButtonChildrenContainer, ButtonOverlayContainer, StyledButton } from './BaseButton.styles'
import { BaseButtonComponent } from './BaseButton.types'

const BaseButton: BaseButtonComponent = ({
  children,
  endIcon,
  fullWidth = false,
  overlay,
  rounded = false,
  size = 'medium',
  startIcon,
  ...props
}) => {
  const { style } = useFont()
  const showOverlay = useMemo(() => !!overlay, [overlay])

  return (
    <StyledButton fullWidth={fullWidth} rounded={rounded} size={size} style={style} {...props}>
      <ButtonChildrenContainer hide={showOverlay}>
        {startIcon}

        {children}

        {endIcon}
      </ButtonChildrenContainer>

      <ButtonOverlayContainer show={showOverlay}>{overlay}</ButtonOverlayContainer>
    </StyledButton>
  )
}

export default BaseButton
