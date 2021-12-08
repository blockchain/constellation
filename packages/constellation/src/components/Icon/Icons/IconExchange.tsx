import React from 'react'

import type { IconProps } from './types'

const IconExchange = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M18.578 16.385 12 9.807l-6.578 6.578 4.933 4.934c.909.908 2.381.908 3.29 0l7.674-7.674a2.326 2.326 0 0 0 0-3.29l-7.674-7.674a2.326 2.326 0 0 0-3.29 0L8.163 4.874 12 8.71l3.837-3.837.548.548-3.837 3.837 3.563 3.563 3.837-3.837.549.548-3.838 3.837 2.467 2.467-.548.548Z'
        fill={color}
      />
      <path
        d='M7.615 5.422 2.68 10.355a2.326 2.326 0 0 0 0 3.29l2.193 2.192 6.578-6.578-3.837-3.837Z'
        fill={color}
      />
    </svg>
  )
}

export default IconExchange
