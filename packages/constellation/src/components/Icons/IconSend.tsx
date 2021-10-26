import type { IconProps } from './types'

const IconSend = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='m3.237 10.322 3.07 2.362 4.996-2.735c.301-.187.602.248.361.497l-3.912 3.419v5.843c0 .559.662.808 1.023.435l2.95-3.295 5.296 4.04c.362.25.843.063.964-.372l3.01-16.783c.06-.498-.362-.87-.783-.684L3.358 9.265c-.422.186-.482.808-.12 1.056'
        fill={color}
      />
    </svg>
  )
}

export default IconSend
