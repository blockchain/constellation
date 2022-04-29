import { FC } from 'react'

type TextHtmlFor = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type TextFontWeigth = 'semibold' | 'regular' | 'medium'
type TextFontStyle = 'regular' | 'italic' | 'numeric'
type TextFontColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
type TextFontSize = 12 | 14 | 16 | 20 | 24 | 32 | 40

type TextEllipsisConfig = {
  rows: number
  symbol: string
}

type TextProps = {
  as?: TextHtmlFor
  color?: TextFontColor
  ellipsis?: boolean | TextEllipsisConfig
  fontSize?: TextFontSize
  fontStyle?: TextFontStyle
  fontWeigth?: TextFontWeigth
  lineHeight?: number
  loading?: boolean
}

type TextComponent = FC<TextProps>

export type {
  TextComponent,
  TextEllipsisConfig,
  TextFontColor,
  TextFontSize,
  TextFontStyle,
  TextFontWeigth,
  TextHtmlFor,
  TextProps,
}
