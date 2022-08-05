import { Indicator, Item } from '@radix-ui/react-radio-group'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Props } from './Radio.types'

/**
 * Radio inputs allow the user to select a single option from a set. Must be used within a RadioGroup.
 *
 * All HTML attributes are supported, and forwarded to the corresponding `input`
 * element. `ref`s are forwarded to the `input` element.
 *
 * For accessibility purposes, an ID attribute must be present so that the
 * input and label can be properly associated. If no ID is provided, a default
 * value of the given name prop + '-input' will be used, but this does not
 * guarantee uniqueness. If multiple forms, or different inputs with the same
 * name values are present on a single page, you must add your own IDs.
 */
export const Radio = forwardRef<HTMLButtonElement, Props>(({ label, ...otherProps }, ref) => {
  const fallbackId = `${otherProps.id ? otherProps.id : 'radio'}-input`

  return (
    <label className='constellation text-body inline-flex gap-1 items-center' htmlFor={fallbackId}>
      <Item
        className={cx(
          'constellation w-6 h-6 rounded-full border-2 p-[3px]',
          'radix-state-checked:border-primary',
          'radix-state-unchecked:border-medium',
          'radix-disabled:border-muted',
        )}
        id={fallbackId}
        ref={ref}
        {...otherProps}
      >
        <Indicator className='constellation flex justify-center items-center before:content-[""] before:block before:w-3.5 before:h-3.5 before:rounded-full before:bg-primary' />
      </Item>
      {label}
    </label>
  )
})

export default Radio
