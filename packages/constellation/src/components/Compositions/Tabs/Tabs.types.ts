import { FC } from 'react'

interface Tab {
  title: string
  value: string
}

export interface TabsProps {
  onTabChange?: (value: Tab['value']) => void
  size: 'large' | 'small'
  tabs: Tab[]
}

export type TabsComponent = FC<TabsProps>
