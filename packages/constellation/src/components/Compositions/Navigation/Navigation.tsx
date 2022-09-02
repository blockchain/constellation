import React, { useEffect, useMemo, useState } from 'react'

import { truncateId } from '../../../utils'
import {
  IconBlockchainLogo,
  IconClose,
  IconMenu,
  IconNotificationOn,
  IconPresent,
  SemanticColors,
  Text,
} from '../../Base'
import { Button, Divider, IconButton, Profile, Tabs } from '../../Primitives'
import { Logo } from '../Logo'
import { DropdownItem, NavigationComponent } from './Navigation.types'
import Dropdown from './NavigationDropdown'
import NavigationTab from './NavigationTab'

/**
 * Navigation a full header component that will allow for navigation around the site.
 * Navigation features a logo with title, navigation tabs, two editable CTA buttons,
 * referrals buttons, a notification button, a profile, and a dropdown menu for
 * mobile and table screen sizes.
 */

const Navigation: NavigationComponent = ({
  defaultSelected,
  dropdownCtaButton,
  dropdownSecondSectionItems,
  dropdownSecondSectionSeparator,
  navigationTabs,
  onNotificationClick,
  onReferralClick,
  onSelectedChange,
  primaryButton,
  secondaryButton,
  selected: selectedOverride,
  title,
  user,
  walletButton,
}) => {
  const tabs = useMemo(() => {
    return navigationTabs.map(({ dot, key, label }) => ({
      key,
      titleContent: <NavigationTab text={label} dot={dot} />,
    }))
  }, [navigationTabs])

  const dropdownItems: DropdownItem[] = useMemo(() => {
    const items = [...navigationTabs]

    if (onNotificationClick) {
      items.push({ key: 'notifications', label: 'Notifications' })
    }
    if (onReferralClick) {
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
    onReferralClick,
    dropdownSecondSectionSeparator,
    dropdownSecondSectionItems,
  ])

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [selected, setSelected] = useState(selectedOverride || defaultSelected)

  const handleSelectedChange = (selected: string) => {
    if (onSelectedChange) {
      onSelectedChange(selected)
    }

    setSelected(selected)
  }

  useEffect(() => {
    if (selectedOverride) {
      setSelected(selectedOverride)
    }
  }, [selectedOverride])

  const truncatedWalletId = useMemo(
    () => (walletButton?.id ? truncateId(walletButton.id, 11) : ''),
    [walletButton?.id],
  )

  return (
    <>
      <nav className='constellation flex flex-row items-center justify-between h-14 pl-6 pr-4 w-full bg-background border-b border-background-light mode-dark:border-dark-700'>
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
              onTabChange={handleSelectedChange}
            />
          </div>
        </div>
        <div className='flex-shrink-0 flex flex-row items-center'>
          <div className='hidden sm:flex flex-row items-center gap-2'>
            {walletButton && (
              <Button
                variant='minimal'
                size='small'
                text={truncatedWalletId}
                onClick={walletButton.onClick}
                style={{ color: SemanticColors.title }}
                prefix={
                  <Logo
                    size='small'
                    primaryContent={{
                      altText: walletButton.imgAlt,
                      imgSrc: walletButton.imgSrc,
                    }}
                  />
                }
              />
            )}
            {primaryButton?.text && <Button {...primaryButton} size='small' />}
            {secondaryButton?.text && (
              <Button variant='minimal' size='small' {...secondaryButton} />
            )}
          </div>
          <div className='flex-row items-center gap-2 hidden lg:flex'>
            {onNotificationClick && (
              <IconButton
                onClick={onNotificationClick}
                icon={<IconNotificationOn alt='Referrals' />}
                aria-label='Notifications'
                size='default'
                className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 ml-4 hover:text-grey-600 transition-colors'
              />
            )}
            {onReferralClick && (
              <IconButton
                onClick={onReferralClick}
                icon={<IconPresent alt='Referrals' />}
                aria-label='Referrals'
                size='default'
                className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 hover:text-grey-600 transition-colors'
              />
            )}
            <Divider orientation='vertical' variant='subtle' className='!h-4 mx-2' />
            {user && <Profile {...user} />}
          </div>
          <IconButton
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            icon={menuIsOpen ? <IconClose size='medium' /> : <IconMenu size='medium' />}
            size='default'
            aria-label={menuIsOpen ? 'close menu' : 'open menu'}
            className='!text-grey-300 hover:!text-grey-400 transition-colors border-none !p-0 !h-fit ml-3 lg:hidden'
          />
        </div>
      </nav>
      <div>
        <Dropdown
          open={menuIsOpen}
          onOpenChange={setMenuIsOpen}
          items={dropdownItems}
          selected={selected}
          ctaButton={dropdownCtaButton}
          onSelectedChange={handleSelectedChange}
        />
      </div>
    </>
  )
}

export default Navigation
