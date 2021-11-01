import { HTMLProps, ReactNode } from 'react'

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

type ComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type TextProps = Omit<HTMLProps<HTMLHeadingElement | HTMLParagraphElement>, 'ref' | 'as'> & {
  children: ReactNode
  component?: ComponentType
  variant?: VariantType
}

export type { TextProps }
