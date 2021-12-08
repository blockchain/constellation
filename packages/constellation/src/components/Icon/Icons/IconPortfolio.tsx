import React from 'react'

import type { IconProps } from './types'

const IconPortfolio = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M2.002 11.987c0 2.366.83 4.54 2.206 6.255l3.95-3.621a4.671 4.671 0 0 1 3.194-7.256V2.002c-5.212.346-9.35 4.686-9.35 9.985ZM22.005 11.319c-.331-4.99-4.326-8.985-9.316-9.317v5.363a4.669 4.669 0 0 1 3.953 3.954h5.363ZM5.113 19.224l3.949-3.619a4.672 4.672 0 0 0 7.581-2.95h5.362c-.347 5.212-4.686 9.35-9.984 9.35a9.975 9.975 0 0 1-6.908-2.78Z'
        fill={color}
      />
    </svg>
  )
}

export default IconPortfolio
