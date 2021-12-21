import React from 'react'

import type { IconProps } from './types'

const IconTagSell = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <g clipPath='url(#a)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.809 1.975c-.603.092-1.12.48-1.377 1.032l-5.75 12.332a1.823 1.823 0 0 0 .881 2.423l11.565 5.392c.912.426 1.997.031 2.422-.881L22.3 9.94a1.823 1.823 0 0 0-.094-1.717L18.221 1.67A1.823 1.823 0 0 0 16.39.817l-7.58 1.158Zm6.085 4.44a1.823 1.823 0 1 0 1.54-3.304 1.823 1.823 0 0 0-1.54 3.304Zm-5.286.553a.911.911 0 0 0-.77 1.652l8.26 3.852a.912.912 0 0 0 .77-1.652l-8.26-3.852Zm-1.541 3.304a.911.911 0 1 0-.77 1.652l4.13 1.926a.912.912 0 0 0 .77-1.652l-4.13-1.926Zm-2.752 3.745a.911.911 0 0 1 1.211-.441l5.783 2.696a.911.911 0 0 1-.77 1.652l-5.783-2.696a.912.912 0 0 1-.44-1.211Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconTagSell
