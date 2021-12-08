import React from 'react'

import type { IconProps } from './types'

const IconFlashOn = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M18.875 7.5h-5.409l1.997-6.084A1.13 1.13 0 0 0 14.376 0h-6.75C7.063 0 6.585.417 6.51.975l-1.5 11.25A1.127 1.127 0 0 0 6.125 13.5h5.565l-2.161 9.117a1.124 1.124 0 0 0 2.067.82l8.25-14.25a1.123 1.123 0 0 0-.97-1.687Z'
        fill={color}
      />
    </svg>
  )
}

export default IconFlashOn
