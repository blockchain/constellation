import type { IconProps } from './types'

const MenuIcon = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z' fill={color} />
    </svg>
  )
}

export default MenuIcon
