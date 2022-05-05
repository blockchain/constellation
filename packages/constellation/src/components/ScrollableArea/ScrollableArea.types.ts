import { FC } from 'react'

type ScrollableAreaProps = {
  backgroundColor?: string
  shadowColor?: {
    b: number
    g: number
    r: number
  }
}

type ScrollableAreaComponent = FC<ScrollableAreaProps>

export type { ScrollableAreaComponent, ScrollableAreaProps }
