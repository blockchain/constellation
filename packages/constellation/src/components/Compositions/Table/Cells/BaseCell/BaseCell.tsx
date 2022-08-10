import cx from 'classnames'
import React from 'react'

import { IconTriangleDown, IconTriangleUp, SemanticColors } from '../../../../Base'
import { BaseCellComponent } from '.'

/**
 * BaseCell has all the basic styles for a cell in a table.
 * It is used as the base for the other cells but can also
 * be used on its own to make custom cells down the line.
 */

const BaseCell: BaseCellComponent = ({ children, isHeader, sort, toggleSort }) => {
  const Component = isHeader ? 'th' : 'td'
  const SortArrow =
    sort === 'asc' ? (
      <IconTriangleUp color={SemanticColors.primary} />
    ) : (
      <IconTriangleDown color={SemanticColors.primary} />
    )

  return (
    <Component
      className={cx(
        'constellation relative h-full px-4 min-w-[204px] font-medium flex items-center',
        {
          'cursor-pointer select-none': toggleSort,
        },
      )}
      onClick={toggleSort}
    >
      <div className='flex flex-row items-center h-full gap-2'>
        {children}
        {sort && SortArrow}
      </div>
    </Component>
  )
}

export default BaseCell
