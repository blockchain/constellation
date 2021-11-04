import type { IconProps } from './types'

const IconWallet = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M19.214 7.286H5.813a.576.576 0 0 1-.563-.59c0-.325.252-.589.563-.589h13.5c.31 0 .562-.264.562-.59 0-.976-.756-1.767-1.688-1.767H5.25C4.007 3.75 3 4.805 3 6.107v11.786c0 1.302 1.007 2.357 2.25 2.357h13.964c.985 0 1.786-.793 1.786-1.768V9.054c0-.975-.8-1.768-1.786-1.768Zm-1.589 7.66c-.621 0-1.125-.527-1.125-1.178 0-.65.504-1.179 1.125-1.179s1.125.528 1.125 1.179c0 .65-.504 1.178-1.125 1.178Z'
        fill={color}
      />
    </svg>
  )
}

export default IconWallet
