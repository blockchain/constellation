import React, { FC } from 'react'

import { ProfileProps } from '../../Primitives/Profile/Profile.types'

interface Button {
  onClick: () => void
  text: string | React.ReactNode
  variant?: 'primary' | 'secondary' | 'minimal'
}

interface tab {
  /**
   * displays a notification badge on the tab
   */
  dot?: boolean
  /**
   * the key of the tag, this is used to identify the currently selected tab.
   */
  key: string
  /**
   * The display name of the tab
   */
  label: string | React.ReactNode
}

interface ctaButton {
  onClick: () => void
  text?: string | React.ReactNode
  variant?: 'error' | 'success' | 'warning'
}

interface NavigationProps {
  /**
   * The key for the default selected tab
   */
  defaultSelected: string
  /**
   * The primary button displayed at the bottom of the dropdown.
   * This is usually a Sign Out button but does support other variants.
   */
  dropdownCtaButton?: ctaButton
  /**
   * The items to be displayed after the tabs, notification, and referrals.
   */
  dropdownSecondSectionItems?: tab[]
  /**
   * Used at the title between the tabs in the dropdown and the second section.
   */
  dropdownSecondSectionSeparator?: { key: string; label: string }
  /**
   * The main navigation tabs shown in the header and at the start
   * of the dropdown on mobile.
   */
  navigationTabs: tab[]
  /**
   * The function called when clicking on the notification button. This function
   * existing also shows the notification button, otherwise it is hidden.
   */
  onNotificationClick?: () => void
  /**
   * The function called when clicking on the referral button. This function
   * existing also shows the referral button, otherwise it is hidden.
   */
  onReferralClick?: () => void
  /**
   * The function called when switching tabs or clicking an option in the dropdown.
   */
  onSelectedChange: (key: string) => void
  /**
   * The primary button in the header displayed after the tabs.
   */
  primaryButton?: Button
  /**
   * The secondary button in the header displayed after the tabs.
   */
  secondaryButton?: Button
  /**
   * Optional key to override the selected tab.
   */
  selected?: string
  /**
   * The title rendered right after the logo at the start of the header.
   */
  title: string | React.ReactNode
  /**
   * The props for the user profile component.
   */
  user?: ProfileProps<'button'>
  /**
   * The props for the wallet button
   */
  walletButton?: {
    /**
     * Wallet id will be truncated to 8 characters ex: 14qV...k3gd
     */
    id: string
    /**
     * The alt text for the image
     */
    imgAlt: string
    /**
     * The SRC for the image displayed before the id
     */
    imgSrc: string
    /**
     * The function called when clicking on the wallet button
     */
    onClick: () => void
  }
}

type NavigationComponent = FC<NavigationProps>

interface DropdownItem {
  /**
   * The key of the dropdownItem, this is used to identify the currently selected dropdownItem.
   */
  key: string
  /**
   * The display name of the dropdownItem
   */
  label: string | React.ReactNode
  /**
   * The function called when clicking on the dropdownItem
   */
  onClick?: () => void
  /**
   * A boolean to determine if the dropdownItem is a clickable item or a separator
   */
  separator?: boolean
}

interface DropdownProps {
  ctaButton?: ctaButton
  items: DropdownItem[]
  onOpenChange: (open: boolean) => void
  onSelectedChange: (key: string) => void
  open: boolean
  selected: string
}

type DropdownComponent = FC<DropdownProps>

export type { DropdownComponent, DropdownItem, DropdownProps, NavigationComponent, NavigationProps }
