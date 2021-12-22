import React from 'react'

import type { IconProps } from './types'

const IconQuestion = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M10.25 24h3.5v-3.429h-3.5V24ZM15.797 12.291l1.575-1.577A5.4 5.4 0 0 0 19 6.857C19 3.07 15.867 0 12 0S5 3.069 5 6.857h3.5c0-1.886 1.575-3.428 3.5-3.428s3.5 1.542 3.5 3.428c0 .943-.385 1.8-1.033 2.417l-2.17 2.16c-1.26 1.252-2.047 2.966-2.047 4.852v.857h3.5c0-2.572.787-3.6 2.047-4.852Z'
        fill={color}
      />
    </svg>
  )
}

export default IconQuestion
