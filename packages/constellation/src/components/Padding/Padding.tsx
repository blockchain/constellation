import React from 'react'

import { usePadding } from './hooks'
import { PaddingComponent } from './types'

export const Padding: PaddingComponent = ({ children, style, ...props }) => {
  const { paddingBottom, paddingLeft, paddingRight, paddingTop } = usePadding(props)

  return (
    <div
      style={{
        paddingBottom: `${paddingBottom}rem`,
        paddingLeft: `${paddingLeft}rem`,
        paddingRight: `${paddingRight}rem`,
        paddingTop: `${paddingTop}rem`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
