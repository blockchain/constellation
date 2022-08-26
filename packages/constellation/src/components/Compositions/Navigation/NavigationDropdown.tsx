import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import cx from 'classnames'
import React from 'react'

import { SemanticColors, Text } from '../../Base'
import { Button } from '../../Primitives'
import { DropdownComponent } from './Navigation.types'

const ctaVariants = {
  error: '!text-error hover:bg-red-000 hover:border-error',
  success: '!text-success hover:bg-green-000 hover:border-success',
  warning: '!text-warning hover:bg-orange-000 hover:border-warning',
}

const Dropdown: DropdownComponent = ({
  children,
  ctaButton,
  items,
  onOpenChange,
  open,
  selected,
}) => {
  return (
    <DropdownMenu.Root onOpenChange={onOpenChange} open={open}>
      <DropdownMenu.Trigger disabled asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        asChild
        className='constellation w-screen h-[calc(100vh-56px)] bg-background pt-4 px-6 pb-6 relative box-border overflow-auto'
      >
        <div className='flex flex-col justify-between'>
          <div>
            {items.map((item) =>
              item.separator ? (
                <DropdownMenu.Separator key={item.key} className='!pl-4 !pb-2 !pt-6'>
                  <Text variant='body1' color={SemanticColors.body}>
                    {item.label}
                  </Text>
                </DropdownMenu.Separator>
              ) : (
                <DropdownMenu.Item asChild key={item.key}>
                  <button
                    className={cx('border-none p-4 w-full text-left rounded-2xl', {
                      'bg-blue-000 mode-dark:bg-dark-700': item.key === selected,
                    })}
                  >
                    <Text variant='title3' color={SemanticColors.title}>
                      {item.label}
                    </Text>
                  </button>
                </DropdownMenu.Item>
              ),
            )}
          </div>
          {ctaButton && (
            <DropdownMenu.Item>
              <Button
                variant='minimal'
                size='large'
                text={ctaButton.text || 'Sign Out'}
                className={cx(
                  'w-full flex justify-center items-center outline-none shadow-none !border border-solid',
                  ctaVariants[ctaButton.variant || 'error'],
                )}
              />
            </DropdownMenu.Item>
          )}
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Dropdown
