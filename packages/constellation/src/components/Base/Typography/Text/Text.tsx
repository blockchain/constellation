import cx from 'classnames'
import React, { forwardRef } from 'react'

import { PolymorphicRef } from '../../../../typings/polymorphic-ref'
import { SemanticColors } from '../../Colors'
import { getTextColorClass } from '../util'
import { TextComponentType } from '.'
import { Props, TextAlignments, TextTransforms, TextVariants } from './Text.types'

/**
 * The Text component is used to present text content with specific,
 * design-defined typographic styles and scales.
 *
 * By default, it will render as an inline `<span>` element, though this can
 * be overridden by providing a valid elementType via the `as` prop.
 *
 * Text accepts a `variant` prop, which may be used as a shorthand for
 * rendering text with commonly used combined sets of styles (eg. font-sizes,
 * weights, families, text-transforms, etc) for different text scales (eg.
 * for various heading levels or body copy types).
 */

const variantClasses: Record<TextVariants, string> = {
  'body-mono': 'text-base font-medium font-mono',
  body1: 'text-base font-medium',
  body2: 'text-base font-semibold',
  caption1: 'text-xs font-medium',
  caption2: 'text-xs font-semibold',
  display: 'text-[2.5rem] font-semibold',
  micro: 'text-[0.625rem] font-medium',
  overline: 'text-xs font-bold uppercase tracking-widest',
  'paragraph-mono': 'text-sm font-medium font-mono',
  paragraph1: 'text-sm font-medium',
  paragraph2: 'text-sm font-semibold',
  subheading: 'text-xl font-medium',
  title1: 'text-[2rem] font-semibold',
  title2: 'text-2xl font-semibold',
  title3: 'text-xl font-semibold',
}

const textAlignClasses: Record<TextAlignments, string> = {
  center: 'text-center',
  end: 'text-end',
  justify: 'text-justify',
  left: 'text-left',
  right: 'text-right',
  start: 'text-start',
}

const transformClasses: Record<TextTransforms, string> = {
  capitalize: 'capitalize',
  lowercase: 'lowercase',
  normalcase: 'normal-case',
  uppercase: 'uppercase',
}

const lineClampClasses = {
  0: '',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
}

const Text: TextComponentType = forwardRef(
  <T extends React.ElementType = 'span'>(
    {
      as,
      color = SemanticColors.body,
      textAlign = 'start',
      transform,
      truncate,
      variant = 'body1',
      className,
      lineClamp = 0,
      ...otherProps
    }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'span'

    const transformClass = transform ? transformClasses[transform] : ''

    return (
      <Component
        className={cx(
          'constellation',
          variantClasses[variant],
          getTextColorClass(color),
          textAlignClasses[textAlign],
          transformClass,
          { truncate },
          lineClampClasses[lineClamp],
          className,
        )}
        ref={ref}
        {...otherProps}
      />
    )
  },
)

export default Text
