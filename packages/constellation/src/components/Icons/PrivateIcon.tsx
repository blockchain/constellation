import type { IconProps } from './types'

const PrivateIcon = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM8.364 8a4.357 4.357 0 0 1 4.109 2.91H20v2.908h-1.454v2.91h-2.91v-2.91h-3.163a4.357 4.357 0 0 1-4.11 2.91A4.367 4.367 0 0 1 4 12.363 4.367 4.367 0 0 1 8.364 8Zm-1.455 4.364c0 .8.655 1.454 1.455 1.454s1.454-.654 1.454-1.454c0-.8-.654-1.455-1.454-1.455-.8 0-1.455.655-1.455 1.455Z'
        fill={color}
      />
    </svg>
  )
}

export default PrivateIcon
