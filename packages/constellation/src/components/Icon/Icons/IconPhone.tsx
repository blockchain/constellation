import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconPhone = ({ color = 'currentColor', height = 24, width = 24, ...props }: RawIconProps) => {
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
        d='M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99ZM17 19H7V5h10v14Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconPhone
