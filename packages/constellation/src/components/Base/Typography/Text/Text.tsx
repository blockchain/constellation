import cx from 'classnames'
import React, { forwardRef } from 'react'

import { TextComponentType } from '.'
import { Props, TextVariants } from './Text.types'

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

const Text: TextComponentType = forwardRef(
  <T extends React.ElementType = 'span'>(
    { as, color, fontWeight, textAlign, truncate, variant = 'body1', ...otherProps }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const Component = as || 'span'

    return (
      <Component
        className={cx('constellation', variantClasses[variant], { truncate })}
        ref={ref}
        {...otherProps}
      />
    )
  },
)

export default Text
