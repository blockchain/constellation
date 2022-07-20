import { Colors } from '../../Colors'

export const textVariants = [
  'display',
  'title1',
  'title2',
  'title3',
  'subheading',
  'body-mono',
  'body1',
  'body2',
  'paragraph-mono',
  'paragraph1',
  'paragraph2',
  'caption1',
  'caption2',
  'overline',
  'micro',
] as const

export type TextVariants = typeof textVariants[number]

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    className?: string
    color?: Colors
    fontWeight?: 'bold' | 'regular'
    textAlign?: 'center' | 'end' | 'justify' | 'start' | 'right' | 'left'
    transform?: 'capitalize' | 'lowercase' | 'uppercase'
    truncate?: boolean
    variant?: TextVariants
  }
>

export type Component = <T extends React.ElementType = 'span'>(
  props: Props<T>,
) => React.ReactElement | null
