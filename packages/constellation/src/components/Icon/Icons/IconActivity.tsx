import React from 'react'
import type { IconProps } from './types'

const IconActivity = ({ color = 'currentColor', height = 18, width = 18, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.75 18a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2.75ZM4.344 4a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5h7.25a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-7.25Zm-.5 4a.5.5 0 0 1 .5-.5h9.312a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H4.344a.5.5 0 0 1-.5-.5V8Zm.5 3a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5H8.5A.5.5 0 0 0 9 12v-.5a.5.5 0 0 0-.5-.5H4.344Z'
        fill={color}
      />
    </svg>
  )
}

export default IconActivity
