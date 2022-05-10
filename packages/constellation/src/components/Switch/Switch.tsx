import React from 'react'
import { useTheme } from 'theme'

import { StyledSwitch, StyledThumb } from './Switch.styles'
import { SwitchComponent } from './Switch.types'

const Switch: SwitchComponent = ({
  checked = false,
  color = 'primary',
  size = 'default',
  ...props
}) => {
  const theme = useTheme()

  const colorVariant = theme.switch.colors[color]
  const sizeVariant = theme.switch.sizes[size]

  return (
    <StyledSwitch
      backgroundColor={colorVariant.backgroundColor}
      height={sizeVariant.height}
      width={sizeVariant.width}
      checked={checked}
      {...props}
    >
      <StyledThumb backgroundColor={colorVariant.thumbColor} size={sizeVariant.thumbSize} />
    </StyledSwitch>
  )
}

export default Switch
