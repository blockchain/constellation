import React from 'react'
import type { IconProps } from './types'

const IconNotificationOff = ({
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
        d='M21.051 19.266 7.332 5.106l-2.9-2.99L3 3.55l3.159 3.159v.011c-.587 1.117-.903 2.437-.903 3.859v5.64L3 18.477v1.128h15.49l2.257 2.256 1.433-1.432-1.129-1.162ZM12.026 23a2.249 2.249 0 0 0 2.256-2.256H9.77A2.249 2.249 0 0 0 12.026 23Zm6.769-8.258V10.59c0-3.475-1.85-6.363-5.077-7.13v-.768A1.69 1.69 0 0 0 12.026 1a1.69 1.69 0 0 0-1.693 1.692v.767c-.169.034-.327.09-.474.136-.112.034-.225.079-.338.124H9.51c-.012 0-.012 0-.023.011a9.4 9.4 0 0 0-.767.35s-.011 0-.011.011l10.086 10.65Z'
        fill={color}
      />
    </svg>
  )
}

export default IconNotificationOff
