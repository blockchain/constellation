import { Root } from '@radix-ui/react-radio-group'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Props } from './RadioGroup.types'

/**
 * Radio groups provide an easy way of rendering a set Radio inputs.
 *
 * For accessibility purposes, an ID attribute must be present so that the
 * input and label can be properly associated. If no ID is provided, a default
 * value of the given name prop + '-input' will be used, but this does not
 * guarantee uniqueness. If multiple forms, or different inputs with the same
 * name values are present on a single page, you must add your own IDs.
 */

export const RadioGroup = forwardRef<HTMLDivElement, Props>(
  ({ children, onChange, orientation, ...otherProps }, ref) => {
    const fallbackId = `${otherProps.name ? otherProps.name : 'radio'}-group`

    return (
      <Root
        className={cx('constellation flex gap-3', {
          'flex-col': orientation === 'vertical',
          'flex-row': orientation === 'horizontal',
        })}
        id={fallbackId}
        ref={ref}
        onValueChange={onChange}
        {...otherProps}
      >
        {children}
      </Root>
    )
  },
)

export default RadioGroup
