import { SelectProps } from '@radix-ui/react-select'
import React, { FC } from 'react'

export interface DropdownItem {
  icon?: React.ReactNode
  label: React.ReactNode
  value: string
}

export type Props = {
  /**
   * Set the current selected value of the dropdown. If undefined, will fall back to placeholder text.
   */
  currentValue?: DropdownItem['value']
  /**
   * List of selectable dropdown that are rendered by the component.
   */
  items: DropdownItem[]
  /**
   * Change handler fired when new selection is made.
   */
  setValue: (value: string) => void
} & SelectProps

export type Component = FC<Props>
