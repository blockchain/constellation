import React from 'react'

import type { IconProps } from './types'

const IconUser = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        d='M12 12c2.762 0 5-2.238 5-5 0-2.763-2.238-5-5-5S7 4.237 7 7c0 2.762 2.238 5 5 5Zm0 2.5c-3.338 0-10 1.675-10 5V22h20v-2.5c0-3.325-6.662-5-10-5Z'
        fill={color}
      />
    </svg>
  )
}

export default IconUser
