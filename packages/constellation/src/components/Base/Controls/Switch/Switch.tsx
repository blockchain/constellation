import { Root, Thumb } from '@radix-ui/react-switch'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import { Props, Variants } from './Switch.types'

/**
 * A control that allows the user to toggle between checked and not checked.
 * An input will also render when used within a form to ensure events propagate correctly.
 */

const thumbVariantClasses: Record<Variants, string> = {
  primary: '',
  success: '',
}
const rootVariantClasses: Record<Variants, string> = {
  primary: 'radix-state-checked:bg-primary',
  success: 'radix-state-checked:bg-success',
}

const Switch = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', ...otherProps }, ref) => {
    return (
      <Root
        className={cx(
          'constellation group',
          'radix-state-unchecked:bg-background-dark mode-dark:radix-state-unchecked:bg-medium p-0',
          'relative inline-flex h-[24px] w-[48px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all',
          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
          rootVariantClasses[variant],
        )}
        ref={ref}
        {...otherProps}
      >
        <Thumb
          className={cx(
            'constellation group-radix-state-checked:translate-x-6',
            'group-radix-state-unchecked:translate-x-0',
            'pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-background ring-0 transition-all',
            thumbVariantClasses[variant],
          )}
        />
      </Root>
    )
  },
)

export default Switch
