import type { IconProps } from './types'

const Security = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#a)' fill={color}>
        <path d='m6 6 1.316 1.324L11 3.83V16h2V3.83l3.5 3.494L18 6l-6-6-6 6Z' />
        <path d='M6 10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-3v2h3v10H6V12h3v-2H6Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Security
