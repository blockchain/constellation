import type { IconProps } from './types'

const IconNotification = ({
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
        d='M12.026 23a2.263 2.263 0 0 0 2.256-2.256H9.77A2.256 2.256 0 0 0 12.026 23Zm6.769-6.77v-5.64c0-3.464-1.85-6.363-5.077-7.13v-.768A1.69 1.69 0 0 0 12.026 1a1.69 1.69 0 0 0-1.693 1.692v.767c-3.238.768-5.077 3.656-5.077 7.13v5.642L3 18.487v1.128h18.051v-1.128l-2.256-2.256Z'
        fill={color}
      />
    </svg>
  )
}

export default IconNotification
