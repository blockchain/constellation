import { TooltipContentProps } from '@radix-ui/react-tooltip'
import { FC, ReactNode } from 'react'

type Props = TooltipContentProps & {
  /**
   * The duration from when the mouse enters the tooltip until it is displayed. In ms defaults to 700.
   */
  delay?: number
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
