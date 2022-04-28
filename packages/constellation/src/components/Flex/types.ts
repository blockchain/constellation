import { CSSProperties, FC } from 'react'

type FlexAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'start'
  | 'end'

type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type FlexProps = {
  alignItems?: FlexAlignItems
  flexDirection?: FlexDirection
  gap?: number
  justifyContent?: FlexJustifyContent
  style?: Omit<CSSProperties, 'alignItems' | 'display' | 'flexDirection' | 'gap' | 'justifyContent'>
}

type FlexComponent = FC<FlexProps>

export type { FlexAlignItems, FlexComponent, FlexDirection, FlexJustifyContent, FlexProps }
