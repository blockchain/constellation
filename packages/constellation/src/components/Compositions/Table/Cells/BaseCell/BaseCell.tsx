import React from 'react'

import { IconTriangleDown, IconTriangleUp, SemanticColors } from '../../../../Base'
import { IconButton } from '../../..'
import { BaseCellComponent } from '.'

/**
 * BaseCell has all the basic styles for a cell in a table.
 * It is used as the base for the other cells but can also
 * be used on its own to make custom cells down the line.
 */

const BaseCell: BaseCellComponent = ({ children, isHeader, sort, toggleSort }) => {
  const Component = isHeader ? 'th' : 'td'
  const SortArrow =
    sort === 'up' ? (
      <IconTriangleUp color={SemanticColors.primary} />
    ) : (
      <IconTriangleDown color={SemanticColors.primary} />
    )

  return (
    <Component className='constellation relative h-full px-4 min-w-[204px] font-medium flex items-center'>
      <div className='flex flex-row items-center h-full gap-2'>{children}</div>
      {sort && <IconButton icon={SortArrow} size='small' onClick={toggleSort} />}
    </Component>
  )
}

export default BaseCell
