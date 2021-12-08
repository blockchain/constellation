import React from 'react'
import type { IconProps } from './types'

const IconFavorite = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M22.466 9.447a.712.712 0 0 0-.565-.5l-6.408-.977-2.865-6.094c-.236-.501-1.02-.501-1.256 0L8.507 7.97 2.1 8.947a.712.712 0 0 0-.565.5.759.759 0 0 0 .177.753l4.637 4.743-1.095 6.698a.753.753 0 0 0 .279.718.674.674 0 0 0 .737.056L12 19.253l5.731 3.162a.67.67 0 0 0 .737-.056.753.753 0 0 0 .279-.718l-1.094-6.698 4.636-4.743a.76.76 0 0 0 .177-.753Z'
        fill={color}
      />
    </svg>
  )
}

export default IconFavorite
