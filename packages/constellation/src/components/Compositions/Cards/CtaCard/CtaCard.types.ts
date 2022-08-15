import { FC, ReactNode } from 'react'

import { Colors } from '../../../Base/Colors'
import { LogoContentProps } from '../../index'

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
  title: string
  variant?: 'default' | 'announcement'
}

type CtaCardComponent = FC<CtaCardProps>

export type { CtaCardComponent, CtaCardProps }
