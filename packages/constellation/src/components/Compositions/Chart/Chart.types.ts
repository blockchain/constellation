import React, { FC, PropsWithChildren } from 'react'

import { DropdownItem } from '../../Primitives/Dropdown/Dropdown.types'
import { Tab } from '../../Primitives/Tabs/Tabs.types'

export type Props = PropsWithChildren<{}>
export type Component = FC<Props>

export type HeaderProps = {
  /**
   * The currency of the data displayed in the chart
   */
  activeCurrency: string
  /**
   * The timeframe of the data displayed in the chart. This informs the active tab, and the price percentage row
   */
  activeTimeframe: Timeframe
  /**
   * List of possible currencies displayed in the chart
   */
  currencies: Currencies
  /**
   * Change handler for the currency dropdown
   */
  setActiveCurrency: (currency: string) => void
  /**
   * Change handler for the timeframe tabs
   */
  setActiveTimeframe: (timeframe: Timeframe) => void
  /**
   * Populates the timeframe tabs with tab options
   */
  timeframeTabs: Tab[]
} & HeaderPriceProps
export interface HeaderPriceProps {
  /**
   * The dollar amount change displayed in the percentage row
   */
  changeInCents: number
  /**
   * The percentage amount change displayed in the percentage row
   */
  changeInDecimal: number
  /**
   * The current price displayed on the lefthand side of the header
   */
  currentPriceInCents: number
  /**
   * The label displayed in the price percentage row for a given timeframe, e.g. 'Past hour'
   */
  timeframeLabel: React.ReactNode
}

export type Timeframe = 'live' | 'day' | 'week' | 'month' | 'year' | 'all'
export type Currencies = DropdownItem[]

export type ChartData = {
  close: number
  date: string
}

export type TooltipData = ChartData
