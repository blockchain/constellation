import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconFullscreen = ({
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
        d='M6.286 14.286H4V20h5.714v-2.286H6.286v-3.428ZM4 9.714h2.286V6.286h3.428V4H4v5.714Zm13.714 8h-3.428V20H20v-5.714h-2.286v3.428ZM14.286 4v2.286h3.428v3.428H20V4h-5.714Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconFullscreen
