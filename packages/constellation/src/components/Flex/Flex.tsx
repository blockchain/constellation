import React from 'react'

import { FlexComponent } from './types'

export const Flex: FlexComponent = ({
  alignItems,
  children,
  flexDirection,
  gap,
  justifyContent,
}) => (
  <div style={{ alignItems, display: 'flex', flexDirection, gap, justifyContent }}>{children}</div>
)
