import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconChartBubbles = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: RawIconProps) => {
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
        d='M21 8.4a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0ZM6.6 18.3a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM15.15 21a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconChartBubbles
