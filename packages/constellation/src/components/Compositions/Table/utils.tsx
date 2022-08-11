import { Row as ReactTableRowType } from '@tanstack/react-table'

import { ButtonCellProps, TextCellProps } from '.'

// the row type for the advanced table
export type RowType = {
  actions: ButtonCellProps | TextCellProps
  amount: TextCellProps
  asset: TextCellProps
}

// sort table cells alphabetically by text and then subtext
export const sortTextCells = (
  rowA: ReactTableRowType<RowType>,
  rowB: ReactTableRowType<RowType>,
  id: string,
) => {
  const rowAData = rowA.original[id as 'amount' | 'asset']
  const rowBData = rowB.original[id as 'amount' | 'asset']

  return `${rowAData.text}${rowAData.subtext}`.localeCompare(`${rowBData.text}${rowBData.subtext}`)
}
