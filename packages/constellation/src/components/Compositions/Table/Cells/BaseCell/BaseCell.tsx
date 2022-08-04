import cx from 'classnames'
import React from 'react'

import { BaseCellComponent } from '.'

const BaseCell: BaseCellComponent = ({ children, header, postfix, prefix }) => {
  return (
    <div
      className={cx(
        'constellation flex items-center h-16 pl-4 gap-2 border-b border-background-light',
        {
          'bg-background-light': header,
        },
      )}
    >
      {prefix}
      {children}
      {postfix}
    </div>
  )
}

export default BaseCell
