import React from 'react'
import type { IconProps } from './types'

const IconNewWindow = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M21 14v5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h5v2H5v14h14v-5h2Z'
        fill={color}
      />
      <path d='M13 5V3h8v8h-2V6.41L10.41 15 9 13.59 17.59 5H13Z' fill={color} />
    </svg>
  )
}

export default IconNewWindow
