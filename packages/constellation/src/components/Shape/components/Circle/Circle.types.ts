import { ShapeTheme } from 'components/Shape/theme'
import { FC } from 'react'
import { LiteralStringUnion } from 'utils'

type CircleProps = {
  backgroundColor?: LiteralStringUnion<keyof ShapeTheme['backgroundColor']>
  borderColor?: LiteralStringUnion<keyof ShapeTheme['borderColor']>
  borderWidth?: LiteralStringUnion<keyof ShapeTheme['borderWidth']> | number
  boxShadow?: LiteralStringUnion<keyof ShapeTheme['boxShadow']>
  centerContent?: boolean
  size?: number
}

type CircleComponent = FC<CircleProps>

export type { CircleComponent, CircleProps }
