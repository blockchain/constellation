import type { IconProps } from './types'

const IconCopy = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1Zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7Zm-1 7h5.5L14 6.5V12Z'
        fill={color}
      />
    </svg>
  )
}

export default IconCopy
