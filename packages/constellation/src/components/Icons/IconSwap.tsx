import type { IconProps } from './types'

const IconSwap = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clipPath='url(#a)' fill={color}>
        <path d='M9.001 10.273V7.147c0-.52.418-.938.938-.938h6.563V2.782a.78.78 0 0 1 1.332-.551l5.946 5.943a.757.757 0 0 1 0 1.067l-5.946 5.952a.78.78 0 0 1-1.332-.551V11.21H9.939A.935.935 0 0 1 9 10.273Z' />
        <path d='M14.999 13.363v3.127c0 .52-.418.937-.938.937H7.498v3.428a.78.78 0 0 1-1.332.55L.22 15.463a.757.757 0 0 1 0-1.067l5.946-5.951a.78.78 0 0 1 1.332.55v3.432h6.563c.52 0 .938.418.938.937Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconSwap
