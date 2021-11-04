import type { IconProps } from './types'

const IconEdit = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z'
        fill={color}
      />
    </svg>
  )
}

export default IconEdit
