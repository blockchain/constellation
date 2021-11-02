import type { IconProps } from './types'

const IconClose = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M20 5.611 18.389 4 12 10.389 5.611 4 4 5.611 10.389 12 4 18.389 5.611 20 12 13.611 18.389 20 20 18.389 13.611 12 20 5.611Z'
        fill={color}
      />
    </svg>
  )
}

export default IconClose
