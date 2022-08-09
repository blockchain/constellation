import { FC } from 'react'

interface Props {
  /**
   * Controlled by the row component isHeader is passed down to the BaseCell component.
   */
  isHeader?: boolean
  /**
   * The text content displayed next to the checkbox.
   */
  text: string

  // more props to come when the final checkbox component is added
}
type Component = FC<Props>

export type { Component, Props }
