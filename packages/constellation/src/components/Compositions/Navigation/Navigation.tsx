import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useEffect } from '@storybook/addons'
import cx from 'classnames'
import React, { useMemo, useState } from 'react'

import {
  IconBlockchainLogo,
  IconClose,
  IconMenu,
  IconNotificationOn,
  IconPresent,
  SemanticColors,
  Text,
} from '../../Base'
import { Button, Divider, IconButton, Tabs } from '../../Primitives'
import { NavigationComponent } from './Navigation.types'
import NavigationTab from './NavigationTab'

/**
 * Navigation is a component that displays a set of page indicators and arrows to
 * navigate between pages.
 */

const Dropdown: React.FC<{
  onOpenChange: (open: boolean) => void
  open: boolean
}> = ({ children, onOpenChange, open }) => {
  return (
    <DropdownMenu.Root onOpenChange={onOpenChange} open={open}>
      <DropdownMenu.Trigger disabled asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        asChild
        className='constellation w-screen h-[calc(100vh-56px)] bg-red-200 pt-4 px-6 pb-6 relative box-border'
      >
        <div>
          <DropdownMenu.Item>
            <Text>Item 1</Text>
          </DropdownMenu.Item>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

const Navigation: NavigationComponent = ({
  navigationTabs,
  onNotificationClick,
  onRefferalClick,
  primaryButton,
  secondaryButton,
  title,
}) => {
  const tabs = useMemo(() => {
    return navigationTabs.map(({ dot, key, label }) => ({
      key,
      titleContent: <NavigationTab text={label} dot={dot} />,
    }))
  }, [navigationTabs])

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Dropdown open={menuIsOpen} onOpenChange={setMenuIsOpen}>
      <div className='constellation flex flex-row items-center justify-between h-14 pl-6 pr-4 w-full bg-background border-b border-background-light mode-dark:border-dark-700'>
        <div className='flex flex-row items-center'>
          <IconBlockchainLogo size='medium' />
          <Text variant='title3' className='ml-2 mr-8' color={SemanticColors.title}>
            {title}
          </Text>
          <div className='hidden lg:block'>
            <Tabs tabs={tabs} defaultActiveTab='home' size='small' variant='minimal' />
          </div>
        </div>
        <div className='flex-shrink-0 flex flex-row items-center'>
          <div className='hidden sm:flex flex-row items-center gap-2'>
            {primaryButton?.text && <Button {...primaryButton} size='small' />}
            {secondaryButton?.text && (
              <Button variant='minimal' size='small' {...secondaryButton} />
            )}
          </div>
          <div className='flex-row items-center gap-2 hidden lg:flex'>
            {onNotificationClick && (
              <IconButton
                onClick={onNotificationClick}
                icon={<IconNotificationOn />}
                size='default'
                className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 ml-4 hover:text-grey-600 transition-colors'
              />
            )}
            {onRefferalClick && (
              <IconButton
                onClick={onRefferalClick}
                icon={<IconPresent />}
                size='default'
                className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 hover:text-grey-600 transition-colors'
              />
            )}
            <Divider orientation='vertical' variant='subtle' className='!h-4 mx-2' />
            <div className='w-8 h-8 bg-medium rounded-full flex justify-center items-center'>
              EM
            </div>
          </div>
          <IconButton
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            icon={menuIsOpen ? <IconClose size='medium' /> : <IconMenu size='medium' />}
            size='default'
            className='text-grey-300 hover:text-grey-300 transition-colors border-none !p-0 !h-fit ml-3 lg:hidden'
          />
        </div>
      </div>
    </Dropdown>
  )
}

export default Navigation
