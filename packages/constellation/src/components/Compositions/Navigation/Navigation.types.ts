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

interface NavigationProps {
  navigationTabs: tab[]
  onNotificationClick?: () => void
  onRefferalClick?: () => void
  primaryButton?: Button
  secondaryButton?: Button
  title: string
}

type NavigationComponent = FC<NavigationProps>

export type { NavigationComponent, NavigationProps }
