import { CSSProperties, FC } from 'react'

export type FlexGrowProps = {
  className?: string
  grow?: boolean | number
  shrink?: boolean | number
  style?: Omit<CSSProperties, 'flex-grow'>
}

export type FlexGrowComponent = FC<FlexGrowProps>
