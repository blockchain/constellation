import { SelectProps } from '@radix-ui/react-select'
import { FC } from 'react'

export interface DropdownItem {
  icon?: React.ReactNode
  label: string
  value: string
}

export type Props = {
  currentValue: DropdownItem['value']
  items: DropdownItem[]
  setValue: (value: string) => void
} & SelectProps

export type Component = FC<Props>
