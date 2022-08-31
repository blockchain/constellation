import { FC, ReactNode } from 'react'

import { TagProps } from '../../../../Primitives'
import { BaseCellProps } from '../..'

interface Props extends BaseCellProps, TagProps {
  /**
   * The text content displayed in the Tag
   */
  text: string | ReactNode
}
type Component = FC<Props>

export type { Component, Props }
