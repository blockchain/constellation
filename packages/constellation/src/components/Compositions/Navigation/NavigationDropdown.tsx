import { Transition } from '@headlessui/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import cx from 'classnames'
import React, { Fragment } from 'react'

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
  onSelectedChange,
  open,
  selected,
}) => {
  return (
    <DropdownMenu.Root onOpenChange={onOpenChange} open={open}>
      <DropdownMenu.Trigger disabled asChild>
        {children}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content forceMount className='constellation overflow-hidden'>
        <Transition
          show={open}
          className='constellation flex flex-col justify-between w-screen h-[calc(100vh-56px)] bg-background pt-4 px-6 pb-6 relative box-border overflow-auto'
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95 -translate-y-1/2'
          enterTo='opacity-100 scale-100 translate-y-0'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100 translate-y-0'
          leaveTo='opacity-0 scale-95 -translate-y-1/2'
        >
          <div>
            {items.map((item) => {
              const onClick = () => {
                onSelectedChange(item.key)
                if (item.onClick) {
                  item.onClick()
                }
              }

              return item.separator ? (
                <DropdownMenu.Separator key={item.key} className='!pl-4 !pb-2 !pt-6'>
                  <Text variant='body1' color={SemanticColors.body}>
                    {item.label}
                  </Text>
                </DropdownMenu.Separator>
              ) : (
                <DropdownMenu.Item asChild key={item.key}>
                  <button
                    onClick={onClick}
                    className={cx('border-none p-4 w-full text-left rounded-2xl', {
                      'bg-blue-000 mode-dark:bg-dark-700 text-primary': item.key === selected,
                    })}
                  >
                    <Text
                      variant='title3'
                      className={cx('text-title hover:text-primary', {
                        'text-primary': item.key === selected,
                      })}
                    >
                      {item.label}
                    </Text>
                  </button>
                </DropdownMenu.Item>
              )
            })}
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
        </Transition>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Dropdown
