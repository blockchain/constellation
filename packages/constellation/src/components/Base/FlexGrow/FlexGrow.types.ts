import { FC } from 'react'

export type FlexGrowProps = {
  grow?: boolean | number
  shrink?: boolean | number
}

export type FlexGrowComponent = FC<FlexGrowProps>
