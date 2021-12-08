import React from 'react'

import type { IconProps } from './types'

const IconChart = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M2 9a1 1 0 0 1 1-1h2.286a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm8-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3Zm8 11.429a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6.571Z'
        fill={color}
      />
    </svg>
  )
}

export default IconChart
