import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Button, ButtonComponentType } from '../Button'
import { Component as ComponentType, Props, Sizes } from './IconButton.types'

/**
 * Icon Buttons extend off of the Button component, and enable a button-like click interaction
 * while maintaining the visual aspects of a provided Icon.
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const sizeClasses: Record<Sizes, string> = {
  default: 'px-3 py-3',
  large: 'px-4 py-4',
  noPadding: '!p-0',
  small: '!px-2 !py-2',
}

const IconButton: ComponentType = forwardRef(
  <T extends ButtonComponentType>({ size, ...otherProps }: Props<T>, ref?: PolymorphicRef<T>) => {
    return (
      <Button
        className={cx(
          'constellation font-semibold cursor-pointer disabled:cursor-not-allowed transition-all items-center justify-center gap-2',
          sizeClasses[size],
        )}
        variant='icon'
        ref={ref}
        text=''
        aria-label='icon button'
        loaderVariant='color'
        {...otherProps}
      />
    )
  },
)

export default IconButton
