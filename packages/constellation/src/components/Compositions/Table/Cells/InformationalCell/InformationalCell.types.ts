import { FC } from 'react'

import { TagProps } from '../../../../Base'
import { BaseCellProps } from '../..'

interface Props extends BaseCellProps, TagProps {
  /**
   * The text content displayed in the Tag
   */
  text: string
}
type Component = FC<Props>

export type { Component, Props }
