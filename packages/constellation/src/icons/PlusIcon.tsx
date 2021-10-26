import type { IconProps } from './types'

const PlusIcon = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M14 14h4a2 2 0 1 0 0-4h-4V6a2 2 0 1 0-4 0v4H6a2 2 0 1 0 0 4h4v4a2 2 0 1 0 4 0v-4Z'
        fill={color}
      />
    </svg>
  )
}

export default PlusIcon
