import { FC } from 'react'

import { ButtonProps } from '../../../index'
import { BaseCellProps } from '../..'

interface Props extends BaseCellProps {
  /**
   * The content for the first button in the cell.
   */
  primaryButton: ButtonProps<'button'>
  /**
   * Optional content for the second button in the cell.
   */
  secondaryButton?: ButtonProps<'button'>
}
type Component = FC<Props>

export type { Component, Props }
