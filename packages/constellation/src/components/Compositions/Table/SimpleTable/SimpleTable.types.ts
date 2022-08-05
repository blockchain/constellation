import React from 'react'

import {
  ButtonCellProps,
  CheckboxCellProps,
  IconCellProps,
  InformationalCellProps,
  TextCellProps,
} from '../'

type ButtonCell = { cellType: 'button' } & ButtonCellProps
type CheckboxCell = { cellType: 'checkbox' } & CheckboxCellProps
type IconCell = { cellType: 'icon' } & IconCellProps
type InformationalCell = { cellType: 'informational' } & InformationalCellProps
type TextCell = { cellType: 'text' } & TextCellProps

type CellProps = ButtonCell | CheckboxCell | IconCell | InformationalCell | TextCell
type RowProps = CellProps[]

export interface Props {
  header?: RowProps
  rows: RowProps[]
}

export type Component = React.FC<Props>
