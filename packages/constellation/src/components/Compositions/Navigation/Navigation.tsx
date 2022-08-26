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
import { DropdownItem, NavigationComponent } from './Navigation.types'
import Dropdown from './NavigationDropdown'
import NavigationTab from './NavigationTab'

/**
 * Navigation a full header component that will allow for naivgation around the site.
 * Navigation featuers a logo with title, navigation tabs, two editable CTA buttons,
 * a referals buttons, a notification button, a profile, and a dropdown menu for
 * mobile and table screen sizes.
 */

const Navigation: NavigationComponent = ({
  dropdownCtaButton,
  dropdownSecondSectionItems,
  dropdownSecondSectionSeparator,
  navigationTabs,
  onNotificationClick,
  onRefferalClick,
  onSelectedChange,
  primaryButton,
  secondaryButton,
  selected,
  title,
}) => {
  const tabs = useMemo(() => {
    return navigationTabs.map(({ dot, key, label }) => ({
      key,
      titleContent: <NavigationTab text={label} dot={dot} />,
    }))
  }, [navigationTabs])

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

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Dropdown
      open={menuIsOpen}
      onOpenChange={setMenuIsOpen}
      items={dropdownItems}
      selected={selected}
      ctaButton={dropdownCtaButton}
      onSelectedChange={onSelectedChange}
    >
      <div className='constellation flex flex-row items-center justify-between h-14 pl-6 pr-4 w-full bg-background border-b border-background-light mode-dark:border-dark-700'>
        <div className='flex flex-row items-center'>
          <IconBlockchainLogo size='medium' />
          <Text variant='title3' className='ml-2 mr-8' color={SemanticColors.title}>
            {title}
          </Text>
          <div className='hidden lg:block'>
            <Tabs
              defaultActiveTab={selected}
              tabs={tabs}
              value={navigationTabs.find((tab) => tab.key === selected)?.key}
              size='small'
              variant='minimal'
              onTabChange={onSelectedChange}
            />
          </div>
        </div>
        <div className='flex-shrink-0 flex flex-row items-center'>
          <div className='hidden sm:flex flex-row items-center gap-2'>
            {
              primaryButton?.text && (
                <Button {...primaryButton} size='small' />
              ) /* TODO: add the wallet switcher when merged */
            }
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
            {/* TODO: replace this with the profile component when merged */}
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
