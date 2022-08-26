import React, { FC } from 'react'

interface Tab {
  key: string
  titleContent: React.ReactNode
}

export interface TabsProps {
  defaultActiveTab: Tab['key']
  onTabChange?: (value: Tab['key']) => void
  size: 'large' | 'small'
  tabs: Tab[]
  value?: Tab['key']
  variant: 'default' | 'minimal'
}

export type TabsComponent = FC<TabsProps>
