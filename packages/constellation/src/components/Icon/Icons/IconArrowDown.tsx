import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconArrowDown = ({
  bgColor = 'transparent',
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
      <circle cx='12' cy='12' r='12' fill={bgColor} />
      <path
        d='m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconArrowDown
