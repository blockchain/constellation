import { List, Root, Trigger } from '@radix-ui/react-tabs'
import cx from 'classnames'
import React from 'react'

import { TabsProps } from './Tabs.types'

const Tabs = ({ defaultActiveTab, onTabChange, size, tabs }: TabsProps) => {
  return (
    <Root onValueChange={onTabChange} defaultValue={defaultActiveTab}>
      <List
        className={cx('constellation flex w-full rounded-[10px] p-[2px]', {
          'bg-background-ultra-light': size === 'large',
          'bg-transparent gap-4 justify-start': size === 'small',
        })}
      >
        {tabs.map(({ title, value }, i) => (
          <Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={cx(
              'constellation group py-2.5 rounded-[10px] text-body',
              'focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              'radix-state-active:bg-background radix-state-active:drop-shadow-control radix-state-active:text-primary children:radix-state-active:border-none',
              {
                'border border-transparent radix-state-active:border-background-light radix-state-active:mode-dark:bg-dark-700':
                  size === 'small',
                'flex flex-1': size === 'large',
              },
            )}
          >
            <span
              className={cx(
                'constellation text-sm font-medium text-gray-700 dark:text-gray-100 px-3',
                {
                  'border-r border-r-medium': i < tabs.length - 1 && size === 'large',
                  'w-full': size === 'large',
                },
              )}
            >
              {title}
            </span>
          </Trigger>
        ))}
      </List>
    </Root>
  )
}

export default Tabs
