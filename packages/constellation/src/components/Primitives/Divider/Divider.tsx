import { Root } from '@radix-ui/react-separator'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import { DividerOrientations, DividerVariants, Props } from './Divider.types'

/**
 * The Divider component visually or semantically separates content.
 *
 * `ref`s are forwarded to the Radix `root` element.
 */

const variantClasses: Record<DividerVariants, string> = {
  distinct: 'bg-background-light',
  medium: 'bg-medium',
  subtle: 'bg-grey-300',
}
const orientationClasses: Record<DividerOrientations, string> = {
  horizontal: 'h-[1px]',
  vertical: 'h-full w-[1px]',
}

const Divider = forwardRef<HTMLDivElement, Props>(
  ({ orientation = 'horizontal', variant = 'subtle', ...otherProps }, ref) => {
    const variantClass = variantClasses[variant]
    const orientationClass = orientationClasses[orientation]
    return (
      <Root
        className={cx('constellation', variantClass, orientationClass)}
        ref={ref}
        orientation={orientation}
        {...otherProps}
      />
    )
  },
)

export default Divider
