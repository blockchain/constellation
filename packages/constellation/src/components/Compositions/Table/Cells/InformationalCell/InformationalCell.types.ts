import { FC } from 'react'

import { TagProps } from '../../../../Primitives'
import { BaseCellProps } from '../..'

type Props = BaseCellProps & TagProps
type Component = FC<Props>

export type { Component, Props }
