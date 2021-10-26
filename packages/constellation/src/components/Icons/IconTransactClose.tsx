import type { IconProps } from './types'

const IconTransactClose = ({
  color = 'currentColor',
  height = 24,
  width = 24,
  ...props
}: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask
        id='a'
        // style='mask-type:alpha' ts does not like this
        maskUnits='userSpaceOnUse'
        x='1'
        y='0'
        width='22'
        height='22'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12 21.5c5.799 0 10.5-4.701 10.5-10.5S17.799.5 12 .5 1.5 5.201 1.5 11 6.201 21.5 12 21.5Zm.44-8.197 2.365 2.364a.623.623 0 0 0 .88 0l.982-.982a.623.623 0 0 0 0-.88l-2.364-2.364a.623.623 0 0 1 0-.882l2.364-2.364a.623.623 0 0 0 0-.88l-.982-.982a.623.623 0 0 0-.88 0L12.44 8.697a.623.623 0 0 1-.882 0L9.195 6.333a.623.623 0 0 0-.88 0l-.982.981a.623.623 0 0 0 0 .881l2.364 2.364a.623.623 0 0 1 0 .882l-2.364 2.364a.623.623 0 0 0 0 .88l.981.982a.623.623 0 0 0 .881 0l2.364-2.364a.623.623 0 0 1 .882 0Z'
          fill='#7349F2'
        />
      </mask>
      <g mask='url(#a)'>
        <g filter='url(#b)'>
          <ellipse
            rx='19.884'
            ry='10.938'
            transform='rotate(-6.459 104.39 -100.749) skewX(.044)'
            fill='#7349F2'
          />
        </g>
        <g filter='url(#c)'>
          <path
            d='M22.565 9.624c-2.948-1.082-4.867-.676-8.008-.77-6.061-.182-9.413 2.04-15.454 1.512-12.327-1.074 21.134-17.56 30.29-9.265C35.15 6.315 41.08 24.486 34.55 20.274c-2.608-1.682-2.967-3.863-5.278-5.932-2.385-2.135-3.698-3.615-6.706-4.719Z'
            fill='#FF0095'
          />
        </g>
        <g filter='url(#d)'>
          <path
            d='M11.786 14.126c-4.76.312-7.866 2.063-10.887 6.136-6.12 8.252 29.64 10.873 24.66 1.807-3.141-5.716-7.694-8.342-13.773-7.943Z'
            fill='#0C6CF2'
          />
        </g>
        <g filter='url(#e)'>
          <path
            d='M28.092 20.442c5.014-1.868 7.783-4.75 9.706-10.103 3.896-10.843-35.39-2.146-27.09 5.997 5.232 5.135 10.98 6.492 17.384 4.106Z'
            fill='#17CF73'
          />
        </g>
      </g>
      <defs>
        <filter
          id='b'
          x='-17.801'
          y='-9.993'
          width='59.595'
          height='42.194'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='5' result='effect1_foregroundBlur_980:1534' />
        </filter>
        <filter
          id='c'
          x='-13.59'
          y='-11.224'
          width='60.997'
          height='42.126'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='5' result='effect1_foregroundBlur_980:1534' />
        </filter>
        <filter
          id='d'
          x='-9.808'
          y='4.086'
          width='45.844'
          height='33.678'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='5' result='effect1_foregroundBlur_980:1534' />
        </filter>
        <filter
          id='e'
          x='-.448'
          y='-4.735'
          width='48.519'
          height='36.317'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='5' result='effect1_foregroundBlur_980:1534' />
        </filter>
      </defs>
    </svg>
  )
}

export default IconTransactClose
