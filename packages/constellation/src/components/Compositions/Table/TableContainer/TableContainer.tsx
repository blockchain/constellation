import cx from 'classnames'
import React, { FC } from 'react'

/**
 * The TableContainer is just a wrapper for the table. It provides the border and required <table> tag
 */

const TableContainer: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <table
      className={cx(
        'constellation bg-background border border-background-light rounded-lg overflow-hidden border-spacing-0 table-auto',
        className,
      )}
    >
      {children}
    </table>
  )
}

export default TableContainer
