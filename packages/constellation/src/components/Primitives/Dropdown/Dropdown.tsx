import * as SelectPrimitive from '@radix-ui/react-select'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import {
  IconArrowDown,
  IconCheckCircle,
  IconChevronDown,
  IconChevronUp,
  IconTriangleDown,
  SemanticColors,
} from '../../Base'
import { variantStyles } from '../Buttons/Button/Button'
import { Props } from './Dropdown.types'

/**
 * The Dropdown component displays a list of options for the user to pick from—triggered by a button.
 *
 * `ref`s are forwarded to the Dropdown trigger element.
 */

const Dropdown = forwardRef<HTMLButtonElement, Props>(
  ({ currentValue, items, setValue, ...otherProps }, ref) => {
    const currentItem = items.find((item) => item.value === currentValue)
    return (
      <SelectPrimitive.Root value={currentValue} onValueChange={setValue} {...otherProps}>
        <SelectPrimitive.Trigger asChild ref={ref}>
          <button
            className={cx(
              'constellation flex justify-between items-center px-4 py-3.5 w-72 cursor-pointer transition-all truncate',
              variantStyles.minimal,
              '!bg-background-light',
              {
                '!text-muted font-normal': !currentValue,
                '!text-title font-semibold': currentValue,
              },
            )}
          >
            {currentValue ? (
              <SelectPrimitive.Value placeholder='Select option'>
                {currentItem && (
                  <div className='constellation flex gap-2 items-center wrap'>
                    {currentItem.icon && currentItem.icon}
                    <span className='constellation truncate'>{currentItem.label}</span>
                  </div>
                )}
              </SelectPrimitive.Value>
            ) : (
              <SelectPrimitive.Value placeholder='Select option' />
            )}
            <SelectPrimitive.Icon className='constellation ml-2'>
              <IconTriangleDown color={SemanticColors.muted} />
            </SelectPrimitive.Icon>
          </button>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton className='constellation flex items-center justify-center text-gray-700'>
            <IconChevronUp />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className='constellation bg-background p-2 rounded-lg shadow-lg'>
            <SelectPrimitive.Group>
              {items.map(({ icon, label, value }) => (
                <SelectPrimitive.Item
                  key={value}
                  value={value}
                  className={cx(
                    'constellation relative flex gap-2 items-center justify-start p-2 rounded-md text-sm text-title font-semibold',
                    'focus:bg-blue-000 mode-dark:focus:bg-dark-700',
                    'radix-disabled:opacity-50',
                    'focus:outline-none select-none',
                  )}
                >
                  {icon && icon}
                  <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className='constellation absolute right-2 inline-flex items-center'>
                    <IconCheckCircle color={SemanticColors.primary} />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className='constellation flex items-center justify-center text-gray-700'>
            <IconChevronDown />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
    )
  },
)

export default Dropdown
