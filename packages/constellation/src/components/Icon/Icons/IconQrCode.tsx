import React from 'react'

import { colors } from '../../../colors'
import type { RawIconProps } from '../types'

const IconQrCode = ({
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
        d='M0 4.5A4.5 4.5 0 0 1 4.5 0h4a.5.5 0 0 1 0 1h-4A3.5 3.5 0 0 0 1 4.5v4a.5.5 0 0 1-1 0v-4Zm15-4a.5.5 0 0 1 .5-.5h4A4.5 4.5 0 0 1 24 4.5v4a.5.5 0 0 1-1 0v-4A3.5 3.5 0 0 0 19.5 1h-4a.5.5 0 0 1-.5-.5ZM.5 15a.5.5 0 0 1 .5.5v4A3.5 3.5 0 0 0 4.5 23h4a.5.5 0 0 1 0 1h-4A4.5 4.5 0 0 1 0 19.5v-4a.5.5 0 0 1 .5-.5Zm23 0a.5.5 0 0 1 .5.5v4a4.5 4.5 0 0 1-4.5 4.5h-4a.5.5 0 0 1 0-1h4a3.5 3.5 0 0 0 3.5-3.5v-4a.5.5 0 0 1 .5-.5Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 3a2 2 0 0 0-2 2v6h8V3H5Zm3.5 2.5h-3v3h3v-3ZM11 13H3v6a2 2 0 0 0 2 2h6v-8Zm-2.5 2.5h-3v3h3v-3ZM19 3h-6v8h8V5a2 2 0 0 0-2-2Zm-.5 2.5h-3v3h3v-3ZM13 13h4v2h2v-2h2v5h-5v-2h-1v5h-2v-8Zm3 8v-2h2v2h-2Zm3-2h2a2 2 0 0 1-2 2v-2Z'
        fill={color === 'currentColor' ? 'currentColor' : colors[color]}
      />
    </svg>
  )
}

export default IconQrCode
