import { Root } from '@radix-ui/react-accessible-icon'
import React from 'react'
import { useTheme } from 'theme'

import { IconComponent } from './Icon.types'
import { isIconColor, isIconSize } from './utils'

const Icon: IconComponent = ({ children, color = 'primary', label, size = 'medium' }) => {
  const theme = useTheme()

  const fill = isIconColor(theme, color) ? theme.icon.colors[color] : color
  const sizeNumber = isIconSize(theme, size) ? theme.icon.sizes[size] : size

  return (
    <Root label={label}>
      {React.cloneElement(children, {
        fill,
        style: { boxSizing: 'border-box', height: `${sizeNumber}rem`, width: `${sizeNumber}rem` },
      })}
    </Root>
  )
}

export default Icon
