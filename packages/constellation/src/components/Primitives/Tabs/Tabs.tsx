import { List, Root, Trigger } from '@radix-ui/react-tabs'
import cx from 'classnames'
import React from 'react'

import { TabsProps } from './Tabs.types'

const variantStyles = {
  default: 'radix-state-active:drop-shadow-control radix-state-active:bg-background',
  minimal:
    'radix-state-active:!border-blue-000 radix-state-active:bg-blue-000 mode-dark:radix-state-active:!bg-dark-800 mode-dark:radix-state-active:!border-dark-800 mode-dark:radix-state-active:!text-white-000 hover:text-primary mode-dark:hover:text-white-000 transition-colors  focus-visible:!ring-0',
}

const Tabs = ({ defaultActiveTab, onTabChange, size, tabs, variant = 'default' }: TabsProps) => {
  return (
    <Root onValueChange={onTabChange} defaultValue={defaultActiveTab}>
      <List
        className={cx(
          'constellation flex w-full rounded-[10px] p-[2px] bg-background-ultra-light',
          {
            'bg-transparent gap-4 justify-start': size === 'small',
          },
        )}
      >
        {tabs.map(({ key, titleContent }, i) => (
          <Trigger
            key={`tab-trigger-${key}`}
            value={key}
            className={cx(
              'constellation group py-2.5 rounded-[10px] text-grey-600 mode-dark:text-grey-400',
              'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              'radix-state-active:text-primary mode-dark:radix-state-active:text-primary children:radix-state-active:border-r-transparent',
              {
                'border border-transparent radix-state-active:border-background-light radix-state-active:mode-dark:bg-dark-800':
                  size === 'small',
                'flex flex-1': size === 'large',
              },
              variantStyles[variant],
            )}
          >
            <span
              className={cx(
                'constellation text-sm font-medium px-3 border-r border-r-transparent text relative',
                {
                  'border-r-medium': i < tabs.length - 1 && size === 'large',
                  'w-full': size === 'large',
                },
              )}
            >
              {titleContent}
            </span>
          </Trigger>
        ))}
      </List>
    </Root>
  )
}

export default Tabs
