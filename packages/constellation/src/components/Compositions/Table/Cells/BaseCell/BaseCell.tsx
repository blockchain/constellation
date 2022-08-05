import cx from 'classnames'
import React from 'react'

import { BaseCellComponent } from '.'

const BaseCell: BaseCellComponent = ({ children, header, postfix, prefix }) => {
  const Component = header ? 'th' : 'td'

  return (
    <Component
      className={cx('constellation h-16 px-4 border-b border-background-light min-w-[204px]', {
        'bg-background-light !h-12': header,
      })}
    >
      <div className='flex flex-row items-center h-full gap-2'>
        {prefix}
        {children}
        {postfix}
      </div>
    </Component>
  )
}

export default BaseCell
