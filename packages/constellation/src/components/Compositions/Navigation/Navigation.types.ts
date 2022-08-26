import React, { FC } from 'react'

interface Button {
  onClick: () => void
  text: string
  variant?: 'primary' | 'secondary' | 'minimal'
}

interface tab {
  dot?: boolean
  key: string
  label: string
}

interface ctaButton {
  onClick: () => void
  text?: string
  variant?: 'error' | 'success' | 'warning'
}

interface NavigationProps {
  dropdownCtaButton?: ctaButton
  dropdownSecondSectionItems?: tab[]
  dropdownSecondSectionSeparator?: { key: string; label: string }
  navigationTabs: tab[]
  onNotificationClick?: () => void
  onRefferalClick?: () => void
  primaryButton?: Button
  secondaryButton?: Button
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
  open: boolean
  selected: string
}

type DropdownComponent = FC<DropdownProps>

export type { DropdownComponent, DropdownItem, DropdownProps, NavigationComponent, NavigationProps }
