import { FC, ReactNode } from 'react'

interface Props {
  /**
   * The Icon to be displayed in the cell
   */
  icon?: ReactNode
  /**
   * Controlled by the row component isHeader is passed down to the BaseCell component.
   */
  isHeader?: boolean
}
type Component = FC<Props>

export type { Component, Props }
