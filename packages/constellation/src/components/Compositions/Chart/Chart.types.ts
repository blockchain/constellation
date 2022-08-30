import { DropdownItem } from 'components/Primitives/Dropdown/Dropdown.types'
import { FC } from 'react'

export type Props = HeaderProps
export type HeaderProps = { activeCurrency: string; currencies: Currencies } & HeaderPriceProps
export type Component = FC<Props>
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
