import React from 'react'

import type { IconProps } from './types'

const IconWithdraw = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M13.86 20.878h-3.726c-.619 0-1.117-.498-1.117-1.117v-7.824H4.932c-.83 0-1.244-1-.657-1.588l7.085-7.087a.903.903 0 0 1 1.271 0l7.094 7.087c.587.587.172 1.588-.657 1.588h-4.09v7.824c0 .619-.498 1.117-1.117 1.117Z'
        fill={color}
      />
    </svg>
  )
}

export default IconWithdraw
