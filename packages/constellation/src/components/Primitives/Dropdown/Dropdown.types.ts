import { FC } from 'react'

export interface DropdownItem {
  icon?: React.ReactNode
  label: string
  value: string
}

export interface Props {
  currentValue: DropdownItem['value']
  items: DropdownItem[]
  setValue: (value: string) => void
}

export type Component = FC<Props>
