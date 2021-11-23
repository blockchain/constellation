import type { IconProps } from './types'

const IconTimeout = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M6.076 3h11.848c.442 0 .826.37.826.83v3.507c0 .459-.384.83-.826.83H15.49c-.547 0-.783.31-.783.665V20.32c0 .385-.31.681-.678.681H10a.665.665 0 0 1-.664-.68V8.727c0-.355-.325-.563-.576-.563H6.076a.825.825 0 0 1-.826-.828V3.83c0-.459.37-.829.826-.829Z'
        fill={color}
      />
    </svg>
  )
}

export default IconTimeout