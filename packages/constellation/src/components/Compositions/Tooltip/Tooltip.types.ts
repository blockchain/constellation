import { FC, ReactNode } from 'react'

type Props = {
  /**
   * Allows the tooltip to be displayed outside of the viewport. Defaults to false.
   */
  allowCollision?: boolean
  /**
   * The duration from when the mouse enters the tooltip until it is displayed. In ms defaults to 700.
   */
  delay?: number
  /**
   * The distace from the trigger to the tooltip in px. Defaults to 0.
   */
  offset?: number
  /**
   * The preferred position of the tooltip. Defaults to 'top'. Can be 'top', 'bottom', 'left', or 'right'.
   * The tooltip will still change sides if a collision occurs.
   */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /**
   * The text content of the tooltip.
   */
  text?: string
  /**
   * The trigger element.
   */
  trigger?: ReactNode
}

type Component = FC<Props>

export type { Component, Props }
