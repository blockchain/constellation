import cx from 'classnames'
import React, { Children, cloneElement, FC, Fragment, isValidElement } from 'react'

/**
 * The `Row` component is used to wrap each row in the table. It styles the background and controls the row's height.
 * It also provides the isHeader prop is each cell when needed
 */

const Row: FC<{ header?: boolean }> = ({ children, header = false }) => {
  const childrenWithHeaderProp = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { isHeader: header })
    }
    return child
  })

  const Wrapper = header ? 'thead' : Fragment // wrapps the component in thead if it's a header row otherwise it wrapps it with a fragment.

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Row
