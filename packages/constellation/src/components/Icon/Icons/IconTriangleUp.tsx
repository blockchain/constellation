import React from 'react'

import type { IconProps } from './types'

const IconTriangleUp = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='m6 15 6-6 6 6H6Z' fill={color} />
    </svg>
  )
}

export default IconTriangleUp
