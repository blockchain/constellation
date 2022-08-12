import { FC } from 'react'

type CardProps = {
  border?: boolean
  size?: 'default' | 'announcements' | 'callout'
  variant?: 'default' | 'CTAS'
}

type CardComponent = FC<CardProps>

export type { CardComponent, CardProps }
