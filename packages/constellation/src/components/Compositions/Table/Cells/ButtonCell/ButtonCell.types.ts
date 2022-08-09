import { FC } from 'react'

import { BaseCellProps } from '../..'

interface ButtonProps {
  /**
   * The function that will be run on button click.
   */
  onClick: () => void
  /**
   * The text content of the button.
   */
  text: string
  /**
   * The stylistic variant to use when rendering the button.
   */
  variant?: 'primary' | 'secondary' | 'minimal'
}

interface Props extends BaseCellProps {
  /**
   * The content for the first button in the cell.
   */
  primaryButton: ButtonProps
  /**
   * Optional content for the second button in the cell.
   */
  secondaryButton?: ButtonProps
}
type Component = FC<Props>

export type { Component, Props }
