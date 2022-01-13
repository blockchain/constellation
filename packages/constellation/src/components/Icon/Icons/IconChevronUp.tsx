import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconChevronUp = ({
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
        d='M4.335 15.665a1.143 1.143 0 0 1 0-1.616l6.857-6.857a1.143 1.143 0 0 1 1.616 0l6.857 6.857a1.143 1.143 0 0 1-1.616 1.616L12 9.616l-6.049 6.05a1.143 1.143 0 0 1-1.616 0Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconChevronUp
