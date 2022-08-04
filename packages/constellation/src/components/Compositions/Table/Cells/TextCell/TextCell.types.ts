import { FC, ReactNode } from 'react'

type Props = {
  header?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  subtext?: string
  text?: string
}
type Component = FC<Props>

export type { Component, Props }
