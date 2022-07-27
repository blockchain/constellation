import React from 'react'

import { PaddingComponent } from './Padding.types'

export const Padding: PaddingComponent = ({
  all,
  bottom,
  children,
  horizontal: horizontalNum,
  left,
  right,
  style,
  top,
  vertical: verticalNum,
}) => {
  const horizontal = horizontalNum?.toString()
  const vertical = verticalNum?.toString()

  return (
    <div
      style={{
        paddingBottom: `${bottom?.toString() || vertical || all}rem`,
        paddingLeft: `${left?.toString() || horizontal || all}rem`,
        paddingRight: `${right?.toString() || horizontal || all}rem`,
        paddingTop: `${top?.toString() || vertical || all}rem`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
