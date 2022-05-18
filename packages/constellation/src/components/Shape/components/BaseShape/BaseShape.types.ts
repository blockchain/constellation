import { ShapeTheme } from 'components/Shape/theme'
import { LiteralStringUnion } from 'utils'

type BaseShapeProps = {
  backgroundColor?: LiteralStringUnion<keyof ShapeTheme['backgroundColor']>
  borderColor?: LiteralStringUnion<keyof ShapeTheme['borderColor']>
  borderWidth?: LiteralStringUnion<keyof ShapeTheme['borderWidth']> | number
  boxShadow?: LiteralStringUnion<keyof ShapeTheme['boxShadow']>
}

export type { BaseShapeProps }
