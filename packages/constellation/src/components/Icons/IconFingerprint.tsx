import type { IconProps } from './types'

const IconFingerprint = ({
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
        d='M18.976 2.964a.557.557 0 0 1-.276-.072C16.396 1.704 14.404 1.2 12.016 1.2c-2.376 0-4.632.564-6.684 1.692a.61.61 0 0 1-.816-.24.607.607 0 0 1 .24-.816A15.068 15.068 0 0 1 12.016 0c2.556 0 4.788.564 7.236 1.824.3.156.408.516.252.804a.588.588 0 0 1-.528.336Zm-17.172 6.3a.598.598 0 0 1-.492-.948c1.188-1.68 2.7-3 4.5-3.924 3.768-1.944 8.592-1.956 12.372-.012 1.8.924 3.312 2.232 4.5 3.9a.6.6 0 0 1-.144.84.598.598 0 0 1-.84-.144 11.265 11.265 0 0 0-4.068-3.528c-3.444-1.764-7.848-1.764-11.28.012-1.632.84-3 2.04-4.08 3.552a.523.523 0 0 1-.468.252Zm7.5 14.484a.563.563 0 0 1-.42-.18C7.84 22.524 7.276 21.852 6.472 20.4c-.828-1.476-1.26-3.276-1.26-5.208 0-3.564 3.048-6.468 6.792-6.468 3.744 0 6.792 2.904 6.792 6.468 0 .336-.264.6-.6.6a.594.594 0 0 1-.6-.6c0-2.904-2.508-5.268-5.592-5.268-3.084 0-5.592 2.364-5.592 5.268 0 1.728.384 3.324 1.116 4.62.768 1.38 1.296 1.968 2.22 2.904a.616.616 0 0 1 0 .852.658.658 0 0 1-.444.18Zm8.604-2.22c-1.428 0-2.688-.36-3.72-1.068-1.788-1.212-2.856-3.18-2.856-5.268 0-.336.264-.6.6-.6.336 0 .6.264.6.6 0 1.692.864 3.288 2.328 4.272.852.576 1.848.852 3.048.852a7.93 7.93 0 0 0 1.248-.12.598.598 0 0 1 .696.492.598.598 0 0 1-.492.696 8.195 8.195 0 0 1-1.452.144ZM15.496 24a.702.702 0 0 1-.156-.024c-1.908-.528-3.156-1.236-4.464-2.52a8.756 8.756 0 0 1-2.604-6.264c0-1.944 1.656-3.528 3.696-3.528s3.696 1.584 3.696 3.528c0 1.284 1.116 2.328 2.496 2.328s2.496-1.044 2.496-2.328c0-4.524-3.9-8.196-8.7-8.196-3.408 0-6.528 1.896-7.932 4.836-.468.972-.708 2.112-.708 3.36 0 .936.084 2.412.804 4.332a.586.586 0 0 1-.348.768.595.595 0 0 1-.768-.348 13.369 13.369 0 0 1-.876-4.752c0-1.44.276-2.748.816-3.888 1.596-3.348 5.136-5.52 9.012-5.52 5.46 0 9.9 4.212 9.9 9.396 0 1.944-1.656 3.528-3.696 3.528s-3.696-1.584-3.696-3.528c0-1.284-1.116-2.328-2.496-2.328s-2.496 1.044-2.496 2.328c0 2.052.792 3.972 2.244 5.412 1.14 1.128 2.232 1.752 3.924 2.22.324.084.504.42.42.732a.586.586 0 0 1-.564.456Z'
        fill={color}
      />
    </svg>
  )
}

export default IconFingerprint
