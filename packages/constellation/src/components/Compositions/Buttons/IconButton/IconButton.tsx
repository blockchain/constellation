import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Button } from '../Button'
import { Component as ComponentType, Props, Sizes } from './IconButton.types'

/**
 * Icon Buttons extend of off the Button component, and enable a button-like click interaction
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
  small: 'px-2 py-2',
}

const IconButton: ComponentType = forwardRef(
  <T extends React.ElementType = 'button'>(
    { size, ...otherProps }: Props<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    return (
      <Button
        className={cx(
          'constellation p- bg-transparent hover:bg-transparent focus:bg-transparent disabled:bg-transparent active:bg-transparent text-primary hover:text-blue-700 mode-dark:hover:text-blue-300 active:text-blue-900 mode-dark:active:text-blue-200 focus:text-blue-800 mode-dark:focus:text-blue-200 disabled:text-blue-200 mode-dark:disabled:text-blue-500',
          sizeClasses[size],
        )}
        ref={ref}
        text=''
        loaderVariant='color'
        {...otherProps}
      />
    )
  },
)

export default IconButton
