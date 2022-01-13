import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconExpandLess = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: RawIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconExpandLess
