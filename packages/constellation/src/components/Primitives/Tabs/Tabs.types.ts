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
}

export type TabsComponent = FC<TabsProps>
