import type { IconProps } from './types'

const IconComment = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 3a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-3.707 3.707c-.63.63-1.707.184-1.707-.707V3Zm4 3.5A1.5 1.5 0 0 1 5.5 5h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 4 6.5ZM5.5 11a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3h-7Z'
        fill={color}
      />
    </svg>
  )
}

export default IconComment
