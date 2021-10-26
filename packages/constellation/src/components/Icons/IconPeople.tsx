import type { IconProps } from './types'

const IconPeople = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
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
        d='M20.001 4c0 2.21-1.79 4-3.999 4-2.21 0-4-1.79-4-4 0-2.209 1.79-3.998 4-3.998S20.001 1.792 20.001 4ZM8.004 13.999c0-2.659 5.329-3.998 7.998-3.998C18.672 10 24 11.34 24 13.997v2H8.004v-2ZM7 8.002c1.934 0 3.5-1.566 3.5-3.5s-1.566-3.5-3.5-3.5a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5Zm0 1.75c.873 0 2.072.164 3.23.49-.75.334-1.465.754-2.03 1.275-.671.62-1.196 1.45-1.196 2.482v1.003H0v-1.75c0-2.328 4.664-3.5 7-3.5Z'
        fill={color}
      />
    </svg>
  )
}

export default IconPeople
