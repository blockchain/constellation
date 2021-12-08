import React from 'react'
import type { IconProps } from './types'

const IconSubdirectory = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M2.667 1v12h16.226L14.12 8.213 16 6.333l8 8-8 8-1.88-1.88 4.773-4.786H0V1h2.667Z'
        fill={color}
      />
    </svg>
  )
}

export default IconSubdirectory
