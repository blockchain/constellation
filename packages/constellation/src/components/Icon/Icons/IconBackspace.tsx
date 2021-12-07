import React from 'react'
import type { IconProps } from './types'

const IconBackspace = ({
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
        d='M20.75 4.5H7.625c-.604 0-1.076.306-1.391.77L1.5 12.375l4.734 7.096c.315.464.787.779 1.391.779H20.75c.962 0 1.75-.788 1.75-1.75V6.25c0-.963-.788-1.75-1.75-1.75Zm-2.625 11.016-1.234 1.234-3.141-3.141-3.141 3.141-1.234-1.234 3.141-3.141-3.141-3.141L10.609 8l3.141 3.141L16.891 8l1.234 1.234-3.141 3.141 3.141 3.141Z'
        fill={color}
      />
    </svg>
  )
}

export default IconBackspace
