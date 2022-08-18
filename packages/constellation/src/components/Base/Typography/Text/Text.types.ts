import { SemanticColors } from '../../Colors'

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

export type TextAlignments = 'center' | 'end' | 'justify' | 'start' | 'right' | 'left'

export type TextTransforms = 'capitalize' | 'lowercase' | 'uppercase' | 'normalcase'

export type Props<T extends React.ElementType> = PolymorphicComponentPropsWithRef<
  T,
  {
    /**
     * The semantic color of the text
     */
    color?: SemanticColors
    /**
     * Hodes the overflow text ofter the specified number of lines
     * 0 is no line clamp
     */
    lineClamp?: 0 | 2 | 3 | 4 | 5 | 6
    /**
     * The alignment of the text, which is applicable when underlying DOM element is block type (like `p` element)
     */
    textAlign?: TextAlignments
    /**
     * Changes the casing of the text
     */
    transform?: TextTransforms
    /**
     * Hides the overflow of a text and adds ellipses
     */
    truncate?: boolean
    /**
     * The stylistic variant to use when rendering.
     */
    variant?: TextVariants
  }
>

export type Component = <T extends React.ElementType = 'span'>(
  props: Props<T>,
) => React.ReactElement | null
