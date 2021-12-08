import React from 'react'

import type { IconProps } from './types'

const IconExpandMore = ({
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
      <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z' fill={color} />
    </svg>
  )
}

export default IconExpandMore
