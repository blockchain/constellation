import { FC, ReactNode } from 'react'

import { LogoContentProps } from '../../Logo'

type CtaCardProps = {
  accentColor?: string
  border?: boolean
  buttonContent?: string
  buttonOnClick?: () => void
  content: string
  footer?: ReactNode
  header?: ReactNode
  logoContent?: LogoContentProps
  onClose?: () => void
  price?: string
  priceChange?: string
  ticker: string
  timeframe?: string
  title: string
  tokenName: string
  variant?: 'default' | 'announcement'
}

type CtaCardComponent = FC<CtaCardProps>

export type { CtaCardComponent, CtaCardProps }
