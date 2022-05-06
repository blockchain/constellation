import React from 'react'

import { usePadding } from './hooks'
import { PaddingComponent } from './types'

export const Padding: PaddingComponent = ({ children, style, ...props }) => {
  const { paddingBottom, paddingLeft, paddingRight, paddingTop } = usePadding(props)

  return (
    <div
      style={{
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
