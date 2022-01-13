import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconSubdirectory = ({
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
        d='M2.667 1v12h16.226L14.12 8.213 16 6.333l8 8-8 8-1.88-1.88 4.773-4.786H0V1h2.667Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconSubdirectory
