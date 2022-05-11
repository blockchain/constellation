import { ShapeTheme } from 'components/Shape/theme'
import { CSSProperties, FC } from 'react'
import { LiteralStringUnion } from 'utils'

type BoxWidthProps =
  | {
      fullWidth: never
      width?: CSSProperties['width']
    }
  | {
      fullWidth?: boolean
      width: never
    }

type BoxHeightProps =
  | {
      fullHeight: never
      height?: CSSProperties['height']
    }
  | {
      fullHeight?: boolean
      height: never
    }

type BoxProps = {
  backgroundColor?: LiteralStringUnion<keyof ShapeTheme['backgroundColor']>
  borderColor?: LiteralStringUnion<keyof ShapeTheme['borderColor']>
  borderRadius?: LiteralStringUnion<keyof ShapeTheme['borderRadius']> | number
  borderWidth?: LiteralStringUnion<keyof ShapeTheme['borderWidth']> | number
  boxShadow?: LiteralStringUnion<keyof ShapeTheme['boxShadow']>
} & BoxWidthProps &
  BoxHeightProps

type BoxComponent = FC<BoxProps>

export type { BoxComponent, BoxProps }
