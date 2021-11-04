import type { IconProps } from './types'

const IconEducation = ({
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
        d='M5 13.18v3.407a1 1 0 0 0 .521.877l5.52 3.013a2 2 0 0 0 1.917 0l5.521-3.013a1 1 0 0 0 .521-.877V13.18l-6.042 3.297a2 2 0 0 1-1.916 0L5 13.18Zm7.958-9.658a2 2 0 0 0-1.916 0L1.805 8.561a.5.5 0 0 0 0 .878l9.237 5.039a2 2 0 0 0 1.916 0L21 10.09V16a1 1 0 1 0 2 0v-5.813a2 2 0 0 0-1.042-1.756l-9-4.909Z'
        fill={color}
      />
    </svg>
  )
}

export default IconEducation
