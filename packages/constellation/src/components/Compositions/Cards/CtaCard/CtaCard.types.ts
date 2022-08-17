import { FC } from 'react'

import { CardProps } from '../Card'

type CtaCardProps = CardProps & {
  price?: string
  priceChange?: string
  ticker: string
  timeframe?: string
  tokenName: string
  variant?: 'default' | 'announcement'
}

type CtaCardComponent = FC<CtaCardProps>

export type { CtaCardComponent, CtaCardProps }
