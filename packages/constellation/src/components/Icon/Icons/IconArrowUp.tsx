import React from 'react'

import type { IconProps } from './types'

const IconArrowUp = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='m20 12-1.41 1.41L13 7.83V20h-2V7.83l-5.58 5.59L4 12l8-8 8 8Z' fill={color} />
    </svg>
  )
}

export default IconArrowUp
