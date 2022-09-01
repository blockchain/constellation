import { Indicator, Root } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-label'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import { SemanticColors } from '../../../Base/Colors'
import { IconCheck } from '../../../Base/Icon'
import { getTextColorClass } from '../../../Base/Typography/util'
import { Props } from './Checkbox.types'

/**
 * The Checkbox control allows users to toggle between checked and not checked.
 *
 * All HTML attributes are supported, and forwarded to the corresponding `input`
 * element. `ref`s are forwarded to the Radix checkbox `root` element.
 *
 * For accessibility purposes, an ID attribute must be present so that the
 * input and label can be properly associated. If no ID is provided, a default
 * value of the given name prop + '-input' will be used, but this does not
 * guarantee uniqueness. If multiple forms, or different inputs with the same
 * name values are present on a single page, you must add your own IDs.
 */
const Checkbox = forwardRef<HTMLButtonElement, Props>(
  ({ error = false, label, labelColor = SemanticColors.body, ...otherProps }, ref) => {
    const fallbackId = `${otherProps.id ? otherProps.id : 'checkbox'}-input`
    return (
      <Label
        className={cx(
          'constellation inline-flex gap-2 items-center',
          getTextColorClass(labelColor),
        )}
        htmlFor={fallbackId}
        role='checkbox'
      >
        <Root
          id={fallbackId}
          ref={ref}
          className={cx(
            'flex h-6 w-6 items-center justify-center rounded-lg border border-solid border-medium bg-background-light',
            'radix-state-checked:bg-primary radix-state-checked:border-primary radix-state-unchecked:bg-background-light dark:radix-state-unchecked:bg-gray-900',
            'focus:outline-none',
            {
              'radix-state-unchecked:border-error radix-state-checked:border-error radix-state-unchecked:bg-red-100 mode-dark:bg-red-900':
                error,
            },
          )}
          {...otherProps}
        >
          <Indicator>
            <IconCheck size='medium' color={SemanticColors.background} />
          </Indicator>
        </Root>

        {label}
      </Label>
    )
  },
)

export default Checkbox
