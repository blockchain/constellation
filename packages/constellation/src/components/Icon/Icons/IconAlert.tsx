import type { IconProps } from './types'

const IconAlert = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M12 24c6.624 0 12-5.376 12-12S18.624 0 12 0 0 5.376 0 12s5.376 12 12 12ZM10.8 6h2.4v7.2h-2.4V6Zm0 9.6h2.4V18h-2.4v-2.4Z'
        fill={color}
      />
    </svg>
  )
}

export default IconAlert
