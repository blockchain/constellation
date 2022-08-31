import { FC, ReactNode } from 'react'

import { CardProps } from '../Card'

type CtaCardProps = CardProps & {
  price?: string | ReactNode
  priceChange?: string | ReactNode
  ticker: string | ReactNode
  timeframe?: string | ReactNode
  tokenName: string | ReactNode
  variant?: 'default' | 'announcement'
}

type CtaCardComponent = FC<CtaCardProps>

export type { CtaCardComponent, CtaCardProps }
