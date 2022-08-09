import { FC, ReactNode } from 'react'

import { BaseCellProps } from '../..'

interface Props extends BaseCellProps {
  /**
   * An optional prop that supplies the Icon to be displayed next to the text.
   */
  icon?: ReactNode
  /**
   * The position of the icon relative to the text.
   */
  iconPosition?: 'left' | 'right'
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
