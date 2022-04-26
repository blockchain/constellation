import React from 'react'

import { FlexComponent } from './types'

export const Flex: FlexComponent = ({
  alignItems,
  children,
  flexDirection,
  gap,
  justifyContent,
  style,
}) => (
  <div style={{ alignItems, display: 'flex', flexDirection, gap, justifyContent, ...style }}>
    {children}
  </div>
)
