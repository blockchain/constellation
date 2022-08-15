import { FC, ReactNode } from 'react'

import { Colors } from '../../../Base/Colors'
import { LogoContentProps } from '../../index'

type CardProps = {
  accentColor?: string
  border?: boolean
  button?: boolean
  buttonContent?: string
  buttonOnClick?: () => void
  content: string
  footer?: ReactNode
  header?: ReactNode
  logoBackground?: Colors
  logoContent?: LogoContentProps
  onClose?: () => void
  title: string
  variant?: 'default' | 'announcement' | 'callout'
}

type CardComponent = FC<CardProps>

export type { CardComponent, CardProps }
