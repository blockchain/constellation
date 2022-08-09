import React from 'react'

import { BaseCellComponent } from '.'

/**
 * BaseCell has all the basic styles for a cell in a table.
 * It is used as the base for the other cells but can also
 * be used on its own to make custom cells down the line.
 */

const BaseCell: BaseCellComponent = ({ children, isHeader }) => {
  const Component = isHeader ? 'th' : 'td'

  return (
    <Component className='constellation relative h-full px-4 min-w-[204px]'>
      <div className='flex flex-row items-center h-full gap-2'>{children}</div>
    </Component>
  )
}

export default BaseCell
