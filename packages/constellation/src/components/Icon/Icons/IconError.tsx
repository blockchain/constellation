import React from 'react'
import type { IconProps } from './types'

const IconError = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M1.755 18.564c-.778 1.333.183 3.007 1.727 3.007h17.036c1.543 0 2.505-1.674 1.727-3.007L13.729 3.962c-.772-1.323-2.684-1.323-3.456 0L1.755 18.564Zm11.336-.24h-2.182v-2.166h2.182v2.165Zm0-4.332h-2.182V8.81h2.182v5.184Z'
        fill={color}
      />
    </svg>
  )
}

export default IconError
