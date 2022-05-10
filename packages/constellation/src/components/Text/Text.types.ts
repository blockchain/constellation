import { FC } from 'react'
import { LiteralStringUnion } from 'utils/LiteralUnion'

import { TextTheme } from './theme'

type TextFontStyle = 'regular' | 'italic' | 'numeric'

type TextEllipsisConfig = {
  rows: number
  symbol: string
}

type TextProps = {
  color?: LiteralStringUnion<keyof TextTheme['colors']> | 'inherit'
  ellipsis?: boolean | TextEllipsisConfig
  fontSize?: number
  fontStyle?: TextFontStyle
  fontWeigth?: keyof TextTheme['weights']
  isLoading?: boolean
  lineHeight?: number
  textAlign?: 'left' | 'center' | 'right' | 'justify'
}

type TextComponent = FC<TextProps>

export type { TextComponent, TextEllipsisConfig, TextFontStyle, TextProps }
