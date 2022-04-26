import { CSSProperties, FC } from 'react'

export type FlexGrowProps = {
  grow?: number
  style?: Omit<CSSProperties, 'flex-grow'>
}

export type FlexGrowComponent = FC<FlexGrowProps>
