import React from 'react'

import type { IconProps } from './types'

const IconChevronDown = ({
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.665 7.335c.447.446.447 1.17 0 1.616l-6.857 6.857a1.143 1.143 0 0 1-1.616 0L4.335 8.951A1.143 1.143 0 1 1 5.95 7.335L12 13.384l6.049-6.05a1.143 1.143 0 0 1 1.616 0Z'
        fill={color}
      />
    </svg>
  )
}

export default IconChevronDown
