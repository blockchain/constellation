import { FC } from 'react'

interface Button {
  onClick: () => void
  text: string
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
  label: string
}

interface ctaButton {
  onClick: () => void
  text?: string
  variant?: 'error' | 'success' | 'warning'
}

interface NavigationProps {
  /**
   * The primary button displayed at the bottom of the dropdown.
   * This is usually a Sign Out button but does support other variants.
   */
  dropdownCtaButton?: ctaButton
  /**
   * The items to be displayed after the tabs, notifiation, and referrals.
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
  onRefferalClick?: () => void
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
   * A required key to identify the currently selected tab.
   */
  selected: string
  /**
   * The title rendered right after the logo at the start of the header.
   */
  title: string
}

type NavigationComponent = FC<NavigationProps>

interface DropdownItem {
  key: string
  label: string
  onClick?: () => void
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
