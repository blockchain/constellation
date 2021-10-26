import type { IconProps } from './types'

const LogoutIcon = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.9 3.6a.6.6 0 0 0-.6-.6H4.598l4.428 2.657c.54.323.874.914.874 1.543v10.2h2.4a.6.6 0 0 0 .6-.6V3.6ZM8.409 6.686l-6-3.6A.6.6 0 0 0 1.5 3.6v13.2c0 .211.11.406.291.514l6 3.6a.602.602 0 0 0 .605.008.6.6 0 0 0 .304-.522V7.2a.598.598 0 0 0-.291-.514ZM14.1 9.687v1.876c0 .311.25.562.563.562H18.6v2.059c0 .417.504.626.8.33l3.567-3.57a.454.454 0 0 0 0-.64L19.4 6.738a.468.468 0 0 0-.8.33v2.057h-3.937a.561.561 0 0 0-.563.562Z'
        fill={color}
      />
    </svg>
  )
}

export default LogoutIcon
