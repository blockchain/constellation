import React, { CSSProperties, useMemo } from 'react'

import { CircularShapeComponent } from './CircularShape.types'

const CircularShape: CircularShapeComponent = ({ children, color, size }) => {
  const style: CSSProperties = useMemo(
    () => ({
      alignItems: 'center',
      backgroundColor: color,
      borderRadius: `${size / 2}rem`,
      display: 'flex',
      height: `${size}rem`,
      justifyContent: 'center',
      width: `${size}rem`,
    }),
    [size, color],
  )

  return <div style={style}>{children}</div>
}

export default CircularShape
