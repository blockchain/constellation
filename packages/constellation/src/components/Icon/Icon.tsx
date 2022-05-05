import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import React from 'react'
import { isIconColor, isIconSize, useTheme } from 'theme'

import { IconComponent } from './types'

const Icon: IconComponent = ({ children, color = 'primary', label, size = 'medium' }) => {
  const theme = useTheme()

  const fill = isIconColor(color) ? theme.icon.colors[color] : color
  const sizeNumber = isIconSize(size) ? theme.icon.sizes[size] : size

  return (
    <AccessibleIcon.Root label={label}>
      {React.cloneElement(children, {
        fill,
        style: { boxSizing: 'border-box', height: `${sizeNumber}rem`, width: `${sizeNumber}rem` },
      })}
    </AccessibleIcon.Root>
  )
}

export default React.memo(Icon)
