import { FC } from 'react'

export interface DropdownItem {
  icon: React.ReactNode
  label: string
  value: string
}

export interface Props {
  defaultValue: string
  items: DropdownItem[]
}

export type Component = FC<Props>
