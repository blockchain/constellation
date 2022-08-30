import { FC } from 'react'

import { IconProps } from '../../../../Base'
import { BaseCellProps } from '../../index'

interface Props extends BaseCellProps {
  /**
   * The Icon to be displayed in the cell
   */
  icon?: FC<IconProps>
  /**
   * The props to be applied to the Icon for size, color, etc.
   */
  iconProps: IconProps
}
type Component = FC<Props>

export type { Component, Props }
