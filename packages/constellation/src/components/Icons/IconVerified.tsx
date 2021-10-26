import type { IconProps } from './types'

const IconVerified = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M21.338 9.378 24 12.411l-2.662 3.033.371 4.014-3.938.895-2.062 3.469L12 22.229l-3.71 1.604-2.06-3.47-3.94-.894.372-4.025L0 12.41l2.662-3.044-.371-4.014 3.938-.884L8.291 1 12 2.593 15.71 1l2.06 3.47 3.94.894-.372 4.014ZM7.995 11.344l2.288 2.289 5.815-5.81 1.642 1.642-7.457 7.457-3.939-3.939 1.65-1.639Z'
        fill={color}
      />
    </svg>
  )
}

export default IconVerified
