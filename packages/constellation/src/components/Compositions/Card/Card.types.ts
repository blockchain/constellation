import { FC } from 'react'

import { LogoContentProps } from '../index'

type CardProps = {
  border?: boolean
  content: string
  ctas?: boolean
  logoContent: LogoContentProps
  title: string
  variant?: 'default' | 'announcements' | 'callout'
}

type CardComponent = FC<CardProps>

export type { CardComponent, CardProps }
