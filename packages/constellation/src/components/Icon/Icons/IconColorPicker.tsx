import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconColorPicker = ({
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
        d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c1.107 0 2-.893 2-2 0-.52-.2-.987-.52-1.347a2.002 2.002 0 0 1-.507-1.32c0-1.106.894-2 2-2h2.36A6.67 6.67 0 0 0 24 10.667C24 4.773 18.627 0 12 0ZM4.667 12c-1.107 0-2-.893-2-2s.893-2 2-2c1.106 0 2 .893 2 2s-.894 2-2 2Zm4-5.333c-1.107 0-2-.894-2-2 0-1.107.893-2 2-2 1.106 0 2 .893 2 2 0 1.106-.894 2-2 2Zm6.666 0c-1.106 0-2-.894-2-2 0-1.107.894-2 2-2 1.107 0 2 .893 2 2 0 1.106-.893 2-2 2Zm4 5.333c-1.106 0-2-.893-2-2s.894-2 2-2c1.107 0 2 .893 2 2s-.893 2-2 2Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconColorPicker
