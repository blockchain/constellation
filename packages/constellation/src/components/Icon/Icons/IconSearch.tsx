import React from 'react'
import type { IconProps } from './types'

const IconSearch = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#a)'>
        <path
          d='M16.161 14.118A8.87 8.87 0 0 0 17.84 8.92 8.92 8.92 0 0 0 8.919 0 8.92 8.92 0 0 0 0 8.92a8.92 8.92 0 0 0 8.92 8.919 8.87 8.87 0 0 0 5.197-1.677l6.816 6.816a1.446 1.446 0 0 0 2.044-2.045l-6.816-6.815Zm-7.242.976A6.167 6.167 0 0 1 2.744 8.92 6.167 6.167 0 0 1 8.92 2.744a6.167 6.167 0 0 1 6.175 6.175 6.167 6.167 0 0 1-6.175 6.175Z'
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

export default IconSearch
