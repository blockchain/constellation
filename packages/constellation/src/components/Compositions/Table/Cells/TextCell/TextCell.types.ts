import { FC, ReactNode } from 'react'

interface Props {
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  isFooter?: boolean
  isHeader?: boolean
  subtext?: string
  text?: string
}
type Component = FC<Props>

export type { Component, Props }
