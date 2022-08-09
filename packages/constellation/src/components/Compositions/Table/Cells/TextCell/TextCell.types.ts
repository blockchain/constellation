import { FC, ReactNode } from 'react'

interface Props {
  /**
   * An optional prop that supplies the Icon to be displayed next to the text.
   */
  icon?: ReactNode
  /**
   * The position of the icon relative to the text.
   */
  iconPosition?: 'left' | 'right'
  /**
   * Controlled by the row component isHeader is passed down to the BaseCell component.
   */
  isHeader?: boolean
  /**
   * The second line of text in the cell, displayed as a lighter color and below the primary text.
   */
  subtext?: string
  /**
   * The first line of text displayed in the cell.
   */
  text?: string
}
type Component = FC<Props>

export type { Component, Props }
