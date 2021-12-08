import React from 'react'

import type { IconProps } from './types'

const IconFlashOff = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M18.875 7.5h-5.409l1.997-6.084A1.13 1.13 0 0 0 14.376 0h-6.75C7.063 0 6.585.417 6.51.975l-.24 1.796 10.951 10.95 2.625-4.534a1.123 1.123 0 0 0-.97-1.687ZM21.5 20 20 21.5l-4.612-4.612-3.792 6.55a1.125 1.125 0 0 1-2.067-.82l2.16-9.118H6.126c-.68 0-1.204-.6-1.115-1.275l.672-5.043L2 3.5 3.5 2l18 18Z'
        fill={color}
      />
    </svg>
  )
}

export default IconFlashOff
