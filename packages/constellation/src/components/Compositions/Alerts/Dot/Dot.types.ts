import { FC } from 'react'

export type Props = {
  /**
   * Classname to apply to the dot to allow for easy positioning
   */
  className?: string
  /**
   * The color of the dot
   */
  variant: 'default' | 'blue' | 'green'
}

export type Component = FC<Props>
