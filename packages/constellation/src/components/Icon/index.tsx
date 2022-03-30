/* eslint-disable simple-import-sort/imports */
import React from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { theme } from '../../stitches.config'

import { IconComponentProps } from './types'

const iconSizes = {
  lg: '36px',
  md: '24px',
  sm: '16px',
}

const Icon = ({ children, color = 'grey800', label, size = 'md' }: IconComponentProps) => {
  const fill = theme.colors[color] as unknown as string

  return (
    <AccessibleIcon.Root label={label}>
      {React.cloneElement(children, {
        fill,
        style: { boxSizing: 'border-box', height: iconSizes[size], width: iconSizes[size] },
      })}
    </AccessibleIcon.Root>
  )
}

export default React.memo(Icon)
