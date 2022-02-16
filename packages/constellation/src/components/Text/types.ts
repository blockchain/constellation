import { FC, ReactNode } from 'react'

export type TextHtmlFor = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export const textColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const
export type TextColor = typeof textColors[number]

export const textSizes = [40, 32, 24, 20, 16, 14, 12] as const
export type TextSize = typeof textSizes[number]

export const textWeigths = ['semibold', 'regular', 'medium'] as const
export type TextWeigth = typeof textWeigths[number]

export const textStyles = ['normal', 'italic', 'numeric'] as const
export type TextStyle = typeof textStyles[number]

export type TextEllipsisConfig = {
  rows: number
  symbol: string
}

export type TextEllipsis = boolean | TextEllipsisConfig

export type TextProps = {
  as?: TextHtmlFor
  color?: TextColor
  ellipsis?: TextEllipsis
  fontSize?: TextSize
  fontStyle?: TextStyle
  fontWeigth?: TextWeigth
}

export type TextComponent = FC<TextProps & { children?: ReactNode | string | string[] }>
