import type { IconProps } from './types'

const IconLineChartUp = ({
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.667 2C2.747 2 2 2.746 2 3.667v16.666C2 21.253 2.746 22 3.667 22h16.666c.92 0 1.667-.746 1.667-1.667V3.667C22 2.747 21.254 2 20.333 2H3.667Zm15.42 2.611a.82.82 0 0 0-1.125.305l-6.08 10.613a.205.205 0 0 1-.281.076L8.21 13.632a.82.82 0 0 0-1.126.304L4.61 18.253a.834.834 0 0 0 .301 1.136.82.82 0 0 0 1.126-.305l1.958-3.418a.205.205 0 0 1 .282-.076l3.39 1.974a.82.82 0 0 0 1.127-.304l6.594-11.514a.834.834 0 0 0-.301-1.135Z'
        fill={color}
      />
    </svg>
  )
}

export default IconLineChartUp
