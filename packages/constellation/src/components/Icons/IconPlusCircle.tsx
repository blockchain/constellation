import type { IconProps } from './types'

const IconPlusCircle = ({
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
        d='M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm6 13.2h-4.8V18h-2.4v-4.8H6v-2.4h4.8V6h2.4v4.8H18v2.4Z'
        fill={color}
      />
    </svg>
  )
}

export default IconPlusCircle
