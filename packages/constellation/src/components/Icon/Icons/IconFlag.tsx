import React from 'react'
import type { IconProps } from './types'

const IconFlag = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z' fill={color} />
    </svg>
  )
}

export default IconFlag
