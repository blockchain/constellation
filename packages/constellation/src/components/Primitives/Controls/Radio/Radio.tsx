import { Label } from '@radix-ui/react-label'
import { Indicator, Item } from '@radix-ui/react-radio-group'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import { SemanticColors } from '../../../Base/Colors'
import { getTextColorClass } from '../../../Base/Typography/util'
import { Props } from './Radio.types'

/**
 * Radio inputs allow the user to select a single option from a set. Must be used within a RadioGroup.
 *
 * All HTML attributes are supported, and forwarded to the corresponding `input`
 * element. `ref`s are forwarded to the Radix radio `item` element.
 *
 * For accessibility purposes, an ID attribute must be present so that the
 * input and label can be properly associated. If no ID is provided, a default
 * value of the given name prop + '-input' will be used, but this does not
 * guarantee uniqueness. If multiple forms, or different inputs with the same
 * name values are present on a single page, you must add your own IDs.
 */
const Radio = forwardRef<HTMLButtonElement, Props>(
  ({ error = false, label, labelColor = SemanticColors.body, ...otherProps }, ref) => {
    const fallbackId = `${otherProps.id ? otherProps.id : 'radio'}-input`
    return (
      <Label
        className={cx(
          'constellation inline-flex gap-2 items-center',
          getTextColorClass(labelColor),
        )}
        htmlFor={fallbackId}
      >
        <Item
          className={cx(
            'constellation w-6 h-6 rounded-full border-2 p-[3px]',
            'radix-state-checked:border-primary',
            'radix-state-unchecked:border-medium',
            'radix-disabled:border-muted',
            {
              'radix-state-unchecked:border-error radix-state-checked:border-error mode-dark:bg-red-900':
                !!error,
            },
          )}
          id={fallbackId}
          ref={ref}
          {...otherProps}
        >
          <Indicator
            className={cx(
              'constellation flex justify-center items-center',
              'before:content-[""] before:block before:w-3.5 before:h-3.5 before:rounded-full before:bg-primary',
            )}
          />
        </Item>

        {label}
      </Label>
    )
  },
)

export default Radio
