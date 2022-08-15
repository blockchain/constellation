import * as SelectPrimitive from '@radix-ui/react-select'
import cx from 'classnames'
import React from 'react'

import { IconCheckCircle, IconChevronDown, IconChevronUp, SemanticColors } from '../../Base'
import { Props } from './Dropdown.types'

const Dropdown = ({ defaultValue, items }: Props) => {
  return (
    <SelectPrimitive.Root defaultValue={defaultValue}>
      <SelectPrimitive.Trigger asChild aria-label='Food'>
        <button>
          <SelectPrimitive.Value placeholder='Make a selection...' />
          <SelectPrimitive.Icon className='constellation ml-2'>
            <IconCheckCircle color={SemanticColors.primary} />
          </SelectPrimitive.Icon>
        </button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.ScrollUpButton className='constellation flex items-center justify-center text-gray-700 dark:text-gray-300'>
          <IconChevronUp />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className='constellation bg-background p-2 rounded-lg shadow-lg'>
          <SelectPrimitive.Group>
            {items.map(({ icon, label, value }) => (
              <SelectPrimitive.Item
                key={value}
                value={value}
                className={cx(
                  'constellation relative flex items-center px-8 py-2 rounded-md text-sm text-title dark:text-gray-300 font-medium',
                  'focus:bg-blue-000 mode-dark:focus:bg-dark-700',
                  'radix-disabled:opacity-50',
                  'focus:outline-none select-none',
                )}
              >
                {icon}
                <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className='constellation absolute left-2 inline-flex items-center'>
                  <IconCheckCircle />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className='constellation flex items-center justify-center text-gray-700 dark:text-gray-300'>
          <IconChevronDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
}

export default Dropdown
