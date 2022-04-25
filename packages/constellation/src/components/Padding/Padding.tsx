import React, { useMemo } from 'react'

import { useEdgeInsetResolver } from './hooks'
import { PaddingComponent } from './types'

export const Padding: PaddingComponent = ({
  all,
  bottom = 0,
  children,
  horizontal,
  left = 0,
  right = 0,
  style,
  top = 0,
  vertical,
}) => {
  const paddingTop = useEdgeInsetResolver(all, vertical, top)
  const paddingBottom = useEdgeInsetResolver(all, vertical, bottom)
  const paddingLeft = useEdgeInsetResolver(all, horizontal, left)
  const paddingRight = useEdgeInsetResolver(all, horizontal, right)

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
