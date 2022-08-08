import cx from 'classnames'
import React, { cloneElement, FC, isValidElement } from 'react'

const Row: FC<{ header?: boolean }> = ({ children, header = false }) => {
  const childrenWithHeaderProp = React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { isHeader: header })
    }
    return child
  })
  return (
    <tr
      className={cx(
        'constellation relative h-16 flex border-b border-background-light last-of-type:!border-transparent',
        {
          'bg-background-light !h-12': header,
        },
      )}
    >
      {childrenWithHeaderProp}
    </tr>
  )
}

export default Row
