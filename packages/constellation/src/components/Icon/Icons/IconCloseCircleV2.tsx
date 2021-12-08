import React from 'react'

import type { IconProps } from './types'

const IconCloseCircleV2 = ({
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
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z'
        fill='#F0F2F7'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.757 7.757a1 1 0 0 0 0 1.415L10.586 12l-2.829 2.828a1 1 0 1 0 1.415 1.415L12 13.414l2.829 2.829a1 1 0 0 0 1.414-1.414L13.414 12l2.829-2.828a1 1 0 0 0-1.414-1.415L12 10.586 9.172 7.757a1 1 0 0 0-1.415 0Z'
        fill={color}
      />
    </svg>
  )
}

export default IconCloseCircleV2
