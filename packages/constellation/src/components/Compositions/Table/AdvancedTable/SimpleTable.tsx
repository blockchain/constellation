import React from 'react'

import { ButtonCell, Row, SimpleTableComponent, TableContainer, TextCell } from '../'

const SimpleTable: SimpleTableComponent = () => {
  return (
    <TableContainer className='table-auto'>
      <Row header>
        <TextCell text='Asset' />
        <TextCell subtext='Amount' />
        <TextCell subtext='Actions' />
      </Row>
      <Row>
        <TextCell subtext='BTC' text='Bitcoin' />
        <TextCell subtext='1 BTC' text='$32,000' />
        <ButtonCell
          primaryButton={{ onClick: () => {}, text: 'Buy', variant: 'primary' }}
          secondaryButton={{ onClick: () => {}, text: 'Sell', variant: 'secondary' }}
        />
      </Row>{' '}
      <Row>
        <TextCell subtext='BTC' text='Bitcoin' />
        <TextCell subtext='1 BTC' text='$32,000' />
        <ButtonCell
          primaryButton={{ onClick: () => {}, text: 'Buy', variant: 'primary' }}
          secondaryButton={{ onClick: () => {}, text: 'Sell', variant: 'secondary' }}
        />
      </Row>
    </TableContainer>
  )
}

export default SimpleTable

/*
const Cell = ({ cellProps, cellType }: { cellProps: BaseCellProps; cellType: string }) => {
  switch (cellType) {
    case 'button':
      const buttonCellProps = cellProps as ButtonCellProps
      return <ButtonCell {...buttonCellProps} />
    case 'checkbox':
      const checkboxCellProps = cellProps as CheckboxCellProps
      return <CheckboxCell {...checkboxCellProps} />
    case 'icon':
      const iconCellProps = cellProps as IconCellProps
      return <IconCell {...iconCellProps} />
    case 'informational':
      const informationalCellProps = cellProps as InformationalCellProps
      return <InformationalCell {...informationalCellProps} />
    case 'text':
    default:
      const textCellProps = cellProps as TextCellProps
      return <TextCell {...textCellProps} />
  }
}

const Row = ({
  cells,
  isFooter,
  isHeader,
}: {
  cells: RowProps
  isFooter?: boolean
  isHeader?: boolean
}) => (
  <tr>
    {cells.map(({ cellType, ...props }, index) => {
      const cellProps = { ...props, isFooter, isHeader }

      return <Cell cellType={cellType} cellProps={cellProps} key={index} />
    })}
  </tr>
)

const SimpleTable: SimpleTableComponent = ({ header, rows }) => {
  return (
    <TableContainer className='table-auto'>
      <thead>
        <tr>{header && <Row cells={header} isHeader />}</tr>
      </thead>
      <tbody>
        {rows.map((cells, index) => {
          const isFooter = index === rows.length - 1

          return (
            <tr key={index}>
              <Row cells={cells} isFooter={isFooter} />
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}

export default SimpleTable
*/
