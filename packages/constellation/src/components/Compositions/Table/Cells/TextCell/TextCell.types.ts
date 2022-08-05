import { FC, ReactNode } from 'react'

interface Props {
  footer?: boolean
  header?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  subtext?: string
  text?: string
}
type Component = FC<Props>

export type { Component, Props }
