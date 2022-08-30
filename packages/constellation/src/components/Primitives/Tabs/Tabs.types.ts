import React, { FC } from 'react'

export interface Tab {
  key: string
  titleContent: React.ReactNode
}

export interface TabsProps {
  defaultActiveTab: Tab['key']
  onTabChange?: (value: Tab['key']) => void
  size: 'large' | 'small'
  tabs: Tab[]
  /**
   * Value overrides the default selected behavior so the tabs can be controlled
   * from outside the component.
   */
  value?: Tab['key']
  variant: 'default' | 'minimal'
}

export type TabsComponent = FC<TabsProps>
