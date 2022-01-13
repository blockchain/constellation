import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconHardware = ({
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
        d='M3.761 2.136c0-.351.285-.636.637-.636h6.363c.352 0 .637.285.637.636v4.455h-.239c.703 0 1.273.57 1.273 1.273v2.545h8.272c.352 0 .637.285.637.636v8.91a.636.636 0 0 1-.637.636h-8.272v.636c0 .703-.57 1.273-1.273 1.273H3.523c-.703 0-1.273-.57-1.273-1.273V7.864c0-.703.57-1.273 1.273-1.273h.238V2.136ZM10.043 19h9.707v-7h-9.707a3.494 3.494 0 0 0-3.418 3.5 3.494 3.494 0 0 0 3.418 3.5Zm.293-1.03c1.36 0 2.46-1.105 2.46-2.47a2.466 2.466 0 0 0-2.46-2.47 2.466 2.466 0 0 0-2.461 2.47 2.466 2.466 0 0 0 2.461 2.47ZM5.034 2.774h5.091V6.59h-5.09V2.773Zm.636 1.272a.636.636 0 0 1 1.273 0v1.273a.636.636 0 0 1-1.273 0V4.045Zm2.546 0a.636.636 0 0 1 1.273 0v1.273a.636.636 0 0 1-1.273 0V4.045Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconHardware
