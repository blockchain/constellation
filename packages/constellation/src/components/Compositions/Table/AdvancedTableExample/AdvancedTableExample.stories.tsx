import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
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
  const [sorting, setSorting] = React.useState<SortingState>([])

  type Row = {
    actions: ButtonCellProps
    amount: TextCellProps
    asset: TextCellProps
  }

  const columns = React.useMemo<ColumnDef<Row>[]>(
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
      },
      {
        accessorKey: 'actions',
        cell: ({ getValue }) => {
          const props = getValue() as ButtonCellProps
          return <ButtonCell {...props} />
        },
        disableSortBy: true,
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
      },
      amount: { subtext: '1 BTC', text: '$32,000' },
      asset: { subtext: 'BTC', text: 'Bitcoin' },
    },
    {
      actions: {
        primaryButton: { onClick, text: 'Buy', variant: 'primary' },
        secondaryButton: { onClick, text: 'Sell', variant: 'secondary' },
      },
      amount: { subtext: '1 ETH', text: '$1,800' },
      asset: { subtext: 'ETH', text: 'Ethereum' },
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
            return flexRender(header.column.columnDef.header, header.getContext())
          })}
        </Row>
      ))}
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <Row key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return flexRender(cell.column.columnDef.cell, cell.getContext())
              })}
            </Row>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
export const AdvancedTable = Template.bind({})
