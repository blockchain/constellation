import { FC } from 'react'

import { BaseCellProps } from '../..'

interface Props extends BaseCellProps {
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
