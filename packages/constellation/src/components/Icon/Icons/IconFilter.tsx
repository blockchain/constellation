import React from 'react'

import type { IconProps } from './types'

const IconFilter = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M3.5 4.3c0-1.54 1.26-2.8 2.8-2.8 1.54 0 2.8 1.26 2.8 2.8 0 1.54-1.26 2.8-2.8 2.8-1.54 0-2.8-1.26-2.8-2.8Zm11 7.7c0-1.54 1.26-2.8 2.8-2.8 1.54 0 2.8 1.26 2.8 2.8 0 1.54-1.26 2.8-2.8 2.8-1.54 0-2.8-1.26-2.8-2.8Zm-4.2 4.9c-1.54 0-2.8 1.26-2.8 2.8 0 1.54 1.26 2.8 2.8 2.8 1.54 0 2.8-1.26 2.8-2.8 0-1.54-1.26-2.8-2.8-2.8Z'
        fill={color}
      />
      <path
        d='M2.29 2.9H21.8c.42 0 .7.28.7.7V5c0 .42-.28.7-.7.7H2.29c-.42 0-.7-.28-.7-.7V3.6c0-.42.28-.7.7-.7Zm19.51 7.7H2.29c-.42 0-.7.28-.7.7v1.4c0 .42.28.7.7.7H21.8c.42 0 .7-.28.7-.7v-1.4c0-.42-.28-.7-.7-.7ZM2.29 18.3H21.8c.42 0 .7.28.7.7v1.4c0 .42-.28.7-.7.7H2.29c-.42 0-.7-.28-.7-.7V19c0-.42.28-.7.7-.7Z'
        fill={color}
      />
    </svg>
  )
}

export default IconFilter
