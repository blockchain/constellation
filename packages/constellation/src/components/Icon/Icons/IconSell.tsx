import React from 'react'
import type { IconProps } from './types'

const IconSell = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M.75 4.5A1.5 1.5 0 0 1 2.25 3h19.5a1.5 1.5 0 0 1 1.5 1.5V15a1.5 1.5 0 0 1-1.5 1.5H2.25A1.5 1.5 0 0 1 .75 15V4.5Zm2-.5a1 1 0 0 0-1 1v2a3 3 0 0 0 3-3h-2ZM15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.75 12.5a3 3 0 0 1 3 3h-2a1 1 0 0 1-1-1v-2ZM21.25 4h-2a3 3 0 0 0 3 3V5a1 1 0 0 0-1-1Zm-2 11.5a3 3 0 0 1 3-3v2a1 1 0 0 1-1 1h-2ZM2.47 18.53c.14.141.331.22.53.22h18a.75.75 0 1 0 0-1.5H3a.75.75 0 0 0-.53 1.28Zm1.5 2.25c.14.141.331.22.53.22h15a.75.75 0 1 0 0-1.5h-15a.75.75 0 0 0-.53 1.28Z'
        fill={color}
      />
    </svg>
  )
}

export default IconSell
