import type { IconProps } from './types'

const IconRewardsCircle = ({
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
        d='M8.5 7.364a1.136 1.136 0 1 0 0 2.272 1.136 1.136 0 0 0 0-2.272ZM15.5 14.364a1.136 1.136 0 1 0 0 2.272 1.136 1.136 0 0 0 0-2.272Z'
        fill={color}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM6 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm7 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm5-8.3L7.2 18 6 16.8 16.8 6 18 7.2Z'
        fill={color}
      />
    </svg>
  )
}

export default IconRewardsCircle
