import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row as ReactTableRowType,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import React, { FC } from 'react'

import { ButtonCell, ButtonCellProps, Row, TableContainer, TextCell, TextCellProps } from '../index'

export default {
  argTypes: { onClick: { action: 'clicked' } },
  args: {},
  title: 'Compositions/Table/Examples/AdvancedTable',
} as ComponentMeta<FC>

const Template: ComponentStory<FC<{ onClick: () => void }>> = ({ onClick }) => {
  const [sorting, setSorting] = React.useState<SortingState>([{ desc: true, id: 'amount' }])

  type RowType = {
    actions: ButtonCellProps | TextCellProps
    amount: TextCellProps
    asset: TextCellProps
  }

  // sort table cells alphabetically by text and then subtext
  const sortTextCells = (
    rowA: ReactTableRowType<RowType>,
    rowB: ReactTableRowType<RowType>,
    id: 'amount' | 'asset',
  ) => {
    const rowAData = rowA.original[id]
    const rowBData = rowB.original[id]

    return `${rowAData.text}${rowAData.subtext}`.localeCompare(
      `${rowBData.text}${rowBData.subtext}`,
    )
  }

  const columns = React.useMemo<ColumnDef<RowType>[]>(
    () => [
      {
        accessorKey: 'asset',
        cell: ({ getValue }) => {
          const props = getValue() as TextCellProps
          return <TextCell {...props} />
        },
        header: ({ header }) => {
          const sort = header.column.getIsSorted()
          const onClick = header.column.getToggleSortingHandler()

          return <TextCell text='Asset' isHeader sort={sort} toggleSort={onClick} />
        },
        sortingFn: sortTextCells,
      },
      {
        accessorKey: 'amount',
        cell: ({ getValue }) => {
          const props = getValue() as TextCellProps
          return <TextCell {...props} />
        },
        header: ({ header }) => {
          const sort = header.column.getIsSorted()
          const onClick = header.column.getToggleSortingHandler()

          return <TextCell subtext='Amount' isHeader sort={sort} toggleSort={onClick} />
        },
        sortingFn: sortTextCells,
      },
      {
        accessorKey: 'actions',
        cell: ({ getValue }) => {
          const props = getValue() as ButtonCellProps
          return <ButtonCell {...props} />
        },
        header: () => <TextCell subtext='Actions' isHeader />,
      },
    ],
    [],
  )

  const data = [
    {
      actions: {
        primaryButton: { onClick, text: 'Buy', variant: 'primary' },
        secondaryButton: { onClick, text: 'Sell', variant: 'secondary' },
      } as ButtonCellProps,
      amount: { subtext: '1 BTC', text: '$32,000' } as TextCellProps,
      asset: { subtext: 'BTC', text: 'Bitcoin' } as TextCellProps,
    },
    {
      actions: {
        primaryButton: { onClick, text: 'Buy', variant: 'primary' },
        secondaryButton: { onClick, text: 'Sell', variant: 'secondary' },
      } as ButtonCellProps,
      amount: { subtext: '1 ETH', text: '$1,800' } as TextCellProps,
      asset: { subtext: 'ETH', text: 'Ethereum' } as TextCellProps,
    },
    {
      actions: {
        primaryButton: { onClick, text: 'Buy', variant: 'primary' },
        secondaryButton: { onClick, text: 'Sell', variant: 'secondary' },
      } as ButtonCellProps,
      amount: { subtext: '1 ETH', text: '$1,900' } as TextCellProps,
      asset: { subtext: 'ETH', text: 'Ethereum' } as TextCellProps,
    },
  ]

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <TableContainer>
      {table.getHeaderGroups().map((headerGroup) => (
        <Row key={headerGroup.id} header>
          {headerGroup.headers.map((header) => {
            return flexRender(header.column.columnDef.header, {
              ...header.getContext(),
              key: header.id,
            })
          })}
        </Row>
      ))}
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <Row key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return flexRender(cell.column.columnDef.cell, {
                  ...cell.getContext(),
                  key: cell.id,
                })
              })}
            </Row>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
export const AdvancedTable = Template.bind({})
