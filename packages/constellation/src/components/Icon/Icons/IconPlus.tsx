import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconPlus = ({ color = 'currentColor', height = 24, width = 24, ...props }: RawIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M14 14h4a2 2 0 1 0 0-4h-4V6a2 2 0 1 0-4 0v4H6a2 2 0 1 0 0 4h4v4a2 2 0 1 0 4 0v-4Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconPlus
