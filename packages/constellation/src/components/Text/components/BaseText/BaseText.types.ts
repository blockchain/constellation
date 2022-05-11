import { TextProps } from 'components/Text/Text.types'

type BaseTextProps = Pick<
  TextProps,
  'color' | 'fontSize' | 'fontStyle' | 'fontWeigth' | 'lineHeight' | 'textAlign'
>

export type { BaseTextProps }
