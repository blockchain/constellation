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
import { RowType, sortTextCells } from './utils'

export default {
  argTypes: { onClick: { action: 'clicked' } },
  args: {},
  title: 'Compositions/Table/Examples/AdvancedTable',
} as ComponentMeta<FC>

const Template: ComponentStory<FC<{ onClick: () => void }>> = ({ onClick }) => {
  const [sorting, setSorting] = React.useState<SortingState>([{ desc: true, id: 'amount' }])

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

          return <TextCell isHeader text='Asset' sort={sort} toggleSort={onClick} />
        },
        // a custom sort function to sort the text cells by text and then subtext values
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

          return <TextCell isHeader subtext='Amount' sort={sort} toggleSort={onClick} />
        },
        // a custom sort function to sort the text cells by text and then subtext values
        sortingFn: sortTextCells,
      },
      {
        accessorKey: 'actions',
        cell: ({ getValue }) => {
          const props = getValue() as ButtonCellProps
          return <ButtonCell {...props} />
        },
        header: () => <TextCell isHeader subtext='Actions' align='right' width='content' />,
      },
    ],
    [],
  )

  // data to be displayed in the table as Cell props
  const data = [
    {
      actions: {
        align: 'right',
        primaryButton: { onClick, text: 'Buy', variant: 'primary' },
        secondaryButton: { onClick, text: 'Sell', variant: 'secondary' },
      } as ButtonCellProps,
      amount: { subtext: '1 BTC', text: '$32,000' } as TextCellProps,
      asset: { subtext: 'BTC', text: 'Bitcoin' } as TextCellProps,
    },
    {
      actions: {
        align: 'right',
        primaryButton: { onClick, text: 'Buy', variant: 'primary' },
        secondaryButton: { onClick, text: 'Sell', variant: 'secondary' },
      } as ButtonCellProps,
      amount: { subtext: '1 ETH', text: '$1,800' } as TextCellProps,
      asset: { subtext: 'ETH', text: 'Ethereum' } as TextCellProps,
    },
    {
      actions: {
        align: 'right',
        primaryButton: { onClick, text: 'Buy', variant: 'primary' },
        secondaryButton: { onClick, text: 'Sell', variant: 'secondary' },
      } as ButtonCellProps,
      amount: { subtext: '1 ETH', text: '$1,900' } as TextCellProps,
      asset: { subtext: 'ETH', text: 'Ethereum' } as TextCellProps,
    },
  ]

  const table = useReactTable({
    columns, // our column accessors
    data, // our data
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <TableContainer className='w-full'>
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

AdvancedTable.parameters = {
  docs: {
    description: {
      component:
        'This is a more feature packed table example. In this example react-table is used to generate the table and handle sorting the text cells. React-table can also be used to enable filtering, pagination, and more.',
    },
  },
}
