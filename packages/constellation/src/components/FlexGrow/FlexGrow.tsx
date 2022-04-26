import React from 'react'

import { FlexGrowComponent } from './types'

export const FlexGrow: FlexGrowComponent = ({ children, grow, style }) => {
  return <div style={{ flexGrow: grow ?? 1, ...style }}>{children}</div>
}
