import React from 'react'
import type { IconProps } from './types'

const IconFullscreenExit = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
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
        d='M4 16h4v4h2v-6H4v2Zm4-8H4v2h6V4H8v4Zm6 12h2v-4h4v-2h-6v6Zm2-12V4h-2v6h6V8h-4Z'
        fill={color}
      />
    </svg>
  )
}

export default IconFullscreenExit
