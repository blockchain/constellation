import type { IconProps } from './types'

const IconVisibilityOn = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#a)'>
        <path
          d='M12 3.82c-5.455 0-10.113 3.393-12 8.182 1.887 4.789 6.545 8.182 12 8.182 5.454 0 10.113-3.393 12-8.182-1.887-4.79-6.546-8.182-12-8.182Zm0 13.636a5.457 5.457 0 0 1-5.455-5.454A5.457 5.457 0 0 1 12 6.547a5.456 5.456 0 0 1 5.454 5.455A5.457 5.457 0 0 1 12 17.456Zm0-8.727a3.268 3.268 0 0 0-3.273 3.273A3.268 3.268 0 0 0 12 15.275a3.268 3.268 0 0 0 3.273-3.273A3.268 3.268 0 0 0 12 8.729Z'
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

export default IconVisibilityOn
