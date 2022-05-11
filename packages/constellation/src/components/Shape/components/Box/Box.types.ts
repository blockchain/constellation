import { ShapeTheme } from 'components/Shape/theme'
import { CSSProperties, FC } from 'react'
import { LiteralStringUnion } from 'utils'

import { BaseShapeProps } from '../BaseShape'

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
  borderRadius?: LiteralStringUnion<keyof ShapeTheme['borderRadius']> | number
} & BaseShapeProps &
  BoxWidthProps &
  BoxHeightProps

type BoxComponent = FC<BoxProps>

export type { BoxComponent, BoxProps }
