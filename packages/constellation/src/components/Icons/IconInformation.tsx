import type { IconProps } from './types'

const IconInformation = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      height={height}
      viewBox='0 0 24 24'
      width={width}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm1.2 18h-2.4v-7.2h2.4V18Zm0-9.6h-2.4V6h2.4v2.4Z'
        fill={color}
      />
    </svg>
  )
}

export default IconInformation
