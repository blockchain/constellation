import React from 'react'

import type { IconProps } from './types'

const IconComputer = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.99 16c0 1.1-.89 2-1.99 2h4v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2l-.01 10ZM20 6H4v10h16V6Zm-6 11h-4v1h4v-1Z'
        fill={color}
      />
    </svg>
  )
}

export default IconComputer
