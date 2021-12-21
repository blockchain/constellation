import React from 'react'

import type { IconProps } from './types'

const IconReceive = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        d='M10.594 3h2.812c.468 0 .844.376.844.844V9.75h3.083c.626 0 .939.756.496 1.199l-5.347 5.35a.681.681 0 0 1-.96 0l-5.354-5.35a.702.702 0 0 1 .495-1.199H9.75V3.844c0-.468.376-.844.844-.844ZM21 16.219v3.937a.842.842 0 0 1-.844.844H3.844A.842.842 0 0 1 3 20.156V16.22c0-.468.376-.844.844-.844H9l1.723 1.723a1.802 1.802 0 0 0 2.552 0L15 15.375h5.157c.468 0 .844.376.844.844Z'
        fill={color}
      />
    </svg>
  )
}

export default IconReceive
