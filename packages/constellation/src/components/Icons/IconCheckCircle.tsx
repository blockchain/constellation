import type { IconProps } from './types'

const IconCheckCircle = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
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
        d='M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0ZM9.6 18l-6-6 1.692-1.692L9.6 14.604l9.108-9.108L20.4 7.2 9.6 18Z'
        fill={color}
      />
    </svg>
  )
}

export default IconCheckCircle
