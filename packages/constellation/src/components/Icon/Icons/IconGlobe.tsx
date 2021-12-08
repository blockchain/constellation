import React from 'react'

import type { IconProps } from './types'

const IconGlobe = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.125-1.875 1.25-1.875S7.125 13.5 7.875 14.25s1.875.025 1.875 1.125S9.9 18 11 18s0 1.93 0 1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39 0 0-.63.123-1 0-1.111-.37 0-2.45 0-3 0-.55-.45-1-1-1 0 0-4.634 2.598-5.375.375C8.378 11.635 7.448 10.552 8 10s2 0 2 0c.55 0 1-.45 1-1 0 0-.552-1.448 0-2s.9 0 2 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z'
        fill={color}
      />
    </svg>
  )
}

export default IconGlobe
