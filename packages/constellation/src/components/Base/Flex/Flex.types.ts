import { FC } from 'react'

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
  grow?: boolean
  justifyContent?: FlexJustifyContent
}

type FlexComponent = FC<FlexProps>

export type { FlexAlignItems, FlexComponent, FlexDirection, FlexJustifyContent, FlexProps }
