import { FC } from 'react'

interface Props {
  /**
   * Controlled by the row component isHeader is passed down to the BaseCell component.
   */
  isHeader?: boolean
  /**
   * The text content displayed in the Tag
   */
  text: string
  /**
   * The stylistic variant to use when rendering the Tag.
   */
  variant?: 'default' | 'alt' | 'success' | 'warning' | 'error'
}
type Component = FC<Props>

export type { Component, Props }
