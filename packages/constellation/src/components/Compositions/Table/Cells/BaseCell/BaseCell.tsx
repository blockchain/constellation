import React from 'react'

import { BaseCellComponent } from '.'

const BaseCell: BaseCellComponent = ({ children, isHeader, postfix, prefix }) => {
  const Component = isHeader ? 'th' : 'td'

  return (
    <Component className='constellation relative h-full px-4 min-w-[204px]'>
      <div className='flex flex-row items-center h-full gap-2'>
        {prefix}
        {children}
        {postfix}
      </div>
    </Component>
  )
}

export default BaseCell
