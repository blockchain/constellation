import type { IconProps } from './types'

const IconBank = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M4.895 10.5v7h2.842v-7H4.895Zm5.684 0v7h2.842v-7H10.58ZM3 22.5h18v-3H3v3Zm13.263-12v7h2.842v-7h-2.842ZM12 1.5l-9 5v2h18v-2l-9-5Z'
        fill={color}
      />
    </svg>
  )
}

export default IconBank
