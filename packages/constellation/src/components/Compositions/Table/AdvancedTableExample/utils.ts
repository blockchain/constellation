import { Row as ReactTableRowType } from '@tanstack/react-table'

import { ButtonCellProps, TextCellProps } from '../index'

// the row type for the advanced table
export type RowType = {
  actions: ButtonCellProps | TextCellProps
  amount: TextCellProps
  asset: TextCellProps
}

// compares two text cells for sorting
export const compareTextCells = (cellA: TextCellProps, cellB: TextCellProps) =>
  `${cellA.text}${cellA.subtext}`.localeCompare(`${cellB.text}${cellB.subtext}`)

// sort table cells alphabetically by text and then subtext
export const sortTextCells = (
  rowA: ReactTableRowType<RowType>,
  rowB: ReactTableRowType<RowType>,
  id: string,
) => {
  const cellAData = rowA.original[id as keyof RowType] as TextCellProps
  const cellBData = rowB.original[id as keyof RowType] as TextCellProps

  return compareTextCells(cellAData, cellBData)
}
