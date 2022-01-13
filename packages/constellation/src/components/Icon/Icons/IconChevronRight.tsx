import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconChevronRight = ({
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.335 4.335a1.143 1.143 0 0 1 1.616 0l6.857 6.857c.446.446.446 1.17 0 1.616l-6.857 6.857a1.143 1.143 0 0 1-1.616-1.616L13.384 12l-6.05-6.049a1.143 1.143 0 0 1 0-1.616Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconChevronRight
