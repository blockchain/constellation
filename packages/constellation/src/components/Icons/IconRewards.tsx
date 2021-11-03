import type { IconProps } from './types'

const IconInterest = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm15.623-6.055-1.237-1.238a1 1 0 0 0-1.415 0L2.708 18.971a1 1 0 0 0 0 1.414l1.238 1.237a1 1 0 0 0 1.414 0L21.623 5.36a1 1 0 0 0 0-1.414ZM19.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm2.5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
        fill={color}
      />
    </svg>
  )
}

export default IconInterest
