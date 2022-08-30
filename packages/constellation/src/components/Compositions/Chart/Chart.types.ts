import { FC, PropsWithChildren } from 'react'

import { DropdownItem } from '../../Primitives/Dropdown/Dropdown.types'

export type Props = PropsWithChildren<{}>
export type Component = FC<Props>

export type HeaderProps = { activeCurrency: string; currencies: Currencies } & HeaderPriceProps
export interface HeaderPriceProps {
  activeCurrency: string
  activeTimeframe: Timeframe
  changeInCents: number
  changeInDecimal: number
  currentPriceInCents: number
  setActiveCurrency: (currency: string) => void
  setActiveTimeframe: (timeframe: Timeframe) => void
}

export type Timeframe = 'live' | 'day' | 'week' | 'month' | 'year' | 'all'
export type Currencies = DropdownItem[]
