import React from 'react'

import { FlexComponent } from './types'

export const Flex: FlexComponent = ({
  alignItems,
  children,
  flexDirection,
  gap = 0,
  justifyContent,
  style,
}) => (
  <div
    style={{
      alignItems,
      display: 'flex',
      flexDirection,
      gap: `${gap}rem`,
      justifyContent,
      ...style,
    }}
  >
    {children}
  </div>
)
