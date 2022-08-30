import { FC } from 'react'

import { BaseCellProps } from '../..'

interface Props extends BaseCellProps {
  /**
   * The text content displayed next to the checkbox.
   */
  text: string | React.ReactNode

  // more props to come when the final checkbox component is added
}
type Component = FC<Props>

export type { Component, Props }
