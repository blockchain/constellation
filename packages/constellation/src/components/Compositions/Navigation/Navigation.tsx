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
import { NavigationComponent, DropdownItem } from './Navigation.types'
import Dropdown from './NavigationDropdown'
import NavigationTab from './NavigationTab'

/**
 * Navigation is a component that displays a set of page indicators and arrows to
 * navigate between pages.
 */

const Navigation: NavigationComponent = ({
  dropdownCtaButton,
  dropdownSecondSectionItems,
  dropdownSecondSectionSeparator,
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

  const [menuIsOpen, setMenuIsOpen] = useState(true)
  const selected = 'home'

  const dropdownItems: DropdownItem[] = useMemo(() => {
    const items = navigationTabs

    if (onNotificationClick) {
      items.push({ key: 'notifications', label: 'Notifications' })
    }
    if (onRefferalClick) {
      items.push({ key: 'referrals', label: 'Referrals' })
    }
    if (dropdownSecondSectionSeparator) {
      items.push({ ...dropdownSecondSectionSeparator, separator: true } as DropdownItem)
    }
    if (dropdownSecondSectionItems) {
      items.push(...dropdownSecondSectionItems)
    }

    return items
  }, [
    navigationTabs,
    onNotificationClick,
    onRefferalClick,
    dropdownSecondSectionSeparator,
    dropdownSecondSectionItems,
  ])

  return (
    <Dropdown
      open={menuIsOpen}
      onOpenChange={setMenuIsOpen}
      items={dropdownItems}
      selected={selected}
      ctaButton={dropdownCtaButton}
    >
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
