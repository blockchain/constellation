import { FC } from 'react'

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

interface Props {
  /**
   * Controlled by the row component isHeader is passed down to the BaseCell component.
   */
  isHeader?: boolean
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
