import React from 'react'
import type { IconProps } from './types'

const IconBlockchain = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
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
        d='m2.711 8.268-.912.913a2.6 2.6 0 0 0 0 3.75l7.351 7.424c.174.178.377.326.6.437v-8.999L2.711 8.268ZM19.289 8.268l.912.913a2.6 2.6 0 0 1 0 3.75l-7.351 7.424a2.237 2.237 0 0 1-.6.437v-8.999l7.039-3.525ZM17.524 6.406l-4.6-4.613a2.613 2.613 0 0 0-3.75 0L4.56 6.406l6.463 3.225 6.5-3.225Z'
        fill={color}
      />
    </svg>
  )
}

export default IconBlockchain
