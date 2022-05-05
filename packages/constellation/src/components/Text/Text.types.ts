import { FC } from 'react'
import { TextColors, TextWeights } from 'theme'
import { LiteralStringUnion } from 'utils/LiteralUnion'

type TextHtmlFor = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type TextFontStyle = 'regular' | 'italic' | 'numeric'

type TextEllipsisConfig = {
  rows: number
  symbol: string
}

type TextProps = {
  as?: TextHtmlFor
  color?: LiteralStringUnion<TextColors>
  ellipsis?: boolean | TextEllipsisConfig
  fontSize?: number
  fontStyle?: TextFontStyle
  fontWeigth?: TextWeights
  isLoading?: boolean
  lineHeight?: number
  textAlign?: 'left' | 'center' | 'right' | 'justify'
}

type TextComponent = FC<TextProps>

export type { TextComponent, TextEllipsisConfig, TextFontStyle, TextHtmlFor, TextProps }
