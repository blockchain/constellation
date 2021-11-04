import type { IconProps } from './types'

const IconLoading = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM3.72 12a8.28 8.28 0 1 0 16.56 0 8.28 8.28 0 0 0-16.56 0Z'
        fill={color}
      />
      <path
        d='M3.515 20.485A12 12 0 0 1 6.552 1.308l1.689 3.314a8.28 8.28 0 0 0-2.096 13.233l-2.63 2.63Z'
        fill='#0C6CF2' // TODO: this will need to be different color
      />
    </svg>
  )
}

export default IconLoading
