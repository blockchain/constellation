import React, { FC } from 'react'

const TableContainer: FC = ({ children }) => {
  return (
    <div className='constellation bg-background border border-background-light rounded-lg overflow-hidden w-fit'>
      {children}
    </div>
  )
}

export default TableContainer
