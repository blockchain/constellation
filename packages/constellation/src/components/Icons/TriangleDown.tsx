import type { IconProps } from './types'

const TriangleDown = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='m6 9 6 6 6-6H6Z' fill={color} />
    </svg>
  )
}

export default TriangleDown
