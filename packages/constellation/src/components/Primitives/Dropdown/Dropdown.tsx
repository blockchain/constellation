import * as SelectPrimitive from '@radix-ui/react-select'
import cx from 'classnames'
import React from 'react'

import { IconCheckCircle, IconChevronDown, IconChevronUp, SemanticColors } from '../../Base'
import { variantStyles } from '../Buttons/Button/Button'
import { Props } from './Dropdown.types'

const Dropdown = ({ currentValue, items, setValue }: Props) => {
  const currentItem = items.find((item) => item.value === currentValue)
  return (
    <SelectPrimitive.Root value={currentValue} onValueChange={setValue}>
      <SelectPrimitive.Trigger asChild aria-label='Food'>
        <button
          className={cx(
            'constellation flex justify-between items-center px-2 py-2.5 w-40 cursor-pointer',
            variantStyles.minimal,
            '!text-title font-semibold',
          )}
        >
          <SelectPrimitive.Value placeholder='Make a selection...'>
            {currentItem && (
              <div className='constellation flex gap-2 items-center'>
                {currentItem.icon && currentItem.icon}
                {currentItem.label}
              </div>
            )}
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon className='constellation ml-2'>
            <IconCheckCircle color={SemanticColors.primary} />
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
}

export default Dropdown
