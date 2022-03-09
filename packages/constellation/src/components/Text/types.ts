import { FC } from 'react'

type VariantType =
  | 'display'
  | 'title-1'
  | 'title-2'
  | 'title-3'
  | 'subheading'
  | 'body-mono'
  | 'body-1'
  | 'body-2'
  | 'paragraph-mono'
  | 'paragraph-1'
  | 'paragraph-2'
  | 'caption-1'
  | 'caption-2'
  | 'overline'
  | 'micro'

type HtmlFor = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type TextColors = 'title' | 'body' | 'muted'

export type TextProps = {
  as?: HtmlFor
  color?: TextColors
  variant?: VariantType
}

export type TextComponent = FC<TextProps>
