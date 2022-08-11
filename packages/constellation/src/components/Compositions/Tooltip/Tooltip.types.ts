import { FC, ReactNode } from 'react'

type Props = {
  /**
   * The content of the tooltip.
   */
  content?: ReactNode
  /**
   * The text content of the tooltip.
   */
  text?: string
}

type Component = FC<Props>

export type { Component, Props }
