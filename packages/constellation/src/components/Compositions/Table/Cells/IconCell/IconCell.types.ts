import { FC, ReactNode } from 'react'

import { BaseCellProps } from '../..'

interface Props extends BaseCellProps {
  /**
   * The Icon to be displayed in the cell
   */
  icon?: ReactNode
}
type Component = FC<Props>

export type { Component, Props }
