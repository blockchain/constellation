import React from 'react'

import type { IconProps } from './types'

const IconRepeat = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 2C6.477 2 2 6.477 2 12a1.351 1.351 0 0 0 2.703 0 7.297 7.297 0 0 1 11.524-5.95l-1.394 1.364a.54.54 0 0 0 .302.922l5.188.732a.54.54 0 0 0 .612-.599l-.619-5.202a.54.54 0 0 0-.915-.323l-1.22 1.195A9.962 9.962 0 0 0 12 2Zm8.649 8.649c-.747 0-1.352.605-1.352 1.351a7.297 7.297 0 0 1-11.544 5.935l1.344-1.315a.54.54 0 0 0-.302-.921l-5.188-.733a.54.54 0 0 0-.612.6l.619 5.202a.54.54 0 0 0 .914.322L5.8 19.846A9.962 9.962 0 0 0 12 22c5.523 0 10-4.477 10-10 0-.746-.605-1.351-1.351-1.351Z'
        fill={color}
      />
    </svg>
  )
}

export default IconRepeat
