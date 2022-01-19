import React from 'react'

import type { IconProps } from './types'

const IconHome = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M7.923 22a1.04 1.04 0 0 0 1.04-1.04v-5.017c0-.575.466-1.04 1.04-1.04h4.004c.574 0 1.04.465 1.04 1.04v5.017c0 .574.465 1.04 1.04 1.04h4.003a1.04 1.04 0 0 0 1.04-1.04V9.837a2.08 2.08 0 0 0-.803-1.642L12.643 2.22a1.04 1.04 0 0 0-1.277 0L3.683 8.195a2.08 2.08 0 0 0-.803 1.642V20.96c0 .574.465 1.04 1.04 1.04h4.003Z'
        fill={color}
      />
    </svg>
  )
}

export default IconHome