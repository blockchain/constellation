import { CSSProperties, FC } from 'react'
import { Theme } from 'theme'
import { LiteralStringUnion } from 'utils/LiteralUnion'

type BoxShapeProps = {
  backgroundColor?: LiteralStringUnion<keyof Theme['background']['colors']>
  borderColor?: LiteralStringUnion<keyof Theme['shape']['borderColor']>
  borderRadius?: LiteralStringUnion<keyof Theme['shape']['borderRadius']>
  borderWidth?: LiteralStringUnion<keyof Theme['shape']['borderWidth']>
  boxShadow?: LiteralStringUnion<keyof Theme['shape']['boxShadow']>
  style?: Exclude<CSSProperties, 'backgroundColor'>
}

type BoxShapeComponent = FC<BoxShapeProps>

export type { BoxShapeComponent, BoxShapeProps }
