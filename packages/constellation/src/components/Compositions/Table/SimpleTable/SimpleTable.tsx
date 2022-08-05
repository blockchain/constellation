import React, { FC } from 'react'

import {
  ButtonCell,
  CheckboxCell,
  IconCell,
  InformationalCell,
  SimpleTableComponent,
  TableContainer,
  TextCell,
} from '../'

const getCellComponent = (cellType: string) => {
  switch (cellType) {
    case 'button':
      return ButtonCell
    case 'checkbox':
      return CheckboxCell
    case 'icon':
      return IconCell
    case 'informational':
      return InformationalCell
    case 'text':
      return TextCell
    default:
      return TextCell
  }
}

const SimpleTable: SimpleTableComponent = ({ header, rows }) => {
  return (
    <TableContainer>
      <table className='table-auto'>
        <thead>
          <tr>
            {header?.map(({ cellType, ...props }, index) => {
              const CellComponent = getCellComponent(cellType)

              return <CellComponent {...props} key={index} isHeader />
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, index) => {
            const isFooter = index === rows.length - 1

            return (
              <tr key={index}>
                {cells?.map(({ cellType, ...props }, index) => {
                  const CellComponent = getCellComponent(cellType)

                  return <CellComponent {...props} key={index} isFooter={isFooter} />
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}

export default SimpleTable
