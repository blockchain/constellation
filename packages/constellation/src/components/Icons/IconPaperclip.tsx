import type { IconProps } from './types'

const IconPaperclip = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
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
        d='M17.25 6a.75.75 0 0 0-.75.75V17.5a4 4 0 1 1-8 0V5a2.5 2.5 0 1 1 5 0v10.5a1 1 0 0 1-2 0V6.75a.75.75 0 0 0-1.5 0v8.75a2.5 2.5 0 0 0 5 0V5a4 4 0 1 0-8 0v12.5a5.5 5.5 0 0 0 11 0V6.75a.75.75 0 0 0-.75-.75Z'
        fill={color}
      />
    </svg>
  )
}

export default IconPaperclip
