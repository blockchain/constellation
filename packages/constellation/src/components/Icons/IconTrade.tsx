import type { IconProps } from './types'

const IconTrade = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#a)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM5.996 10.754c0-.414.337-.75.751-.75h.503c.415 0 .75.334.75.748l-.003 3.829 6.588-6.577-3.835.003A.748.748 0 0 1 10 7.26v-.502c.001-.414.337-.75.752-.75L17.26 6c.415 0 .75.335.75.748l-.006 6.497c0 .414-.336.75-.75.75h-.504a.748.748 0 0 1-.75-.748l.004-3.833-6.593 6.581 3.84-.003c.414 0 .75.335.75.748l-.001.502c0 .414-.337.75-.752.75L6.74 18a.748.748 0 0 1-.75-.748l.006-6.497Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconTrade
