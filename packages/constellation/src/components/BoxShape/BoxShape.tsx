import React from 'react'
import {
  isBackgroundColor,
  isBorderColor,
  isBorderRadius,
  isBorderWidth,
  isBoxShadow,
  useTheme,
} from 'theme'

import { BoxShapeComponent } from './BoxShape.types'

const BoxShape: BoxShapeComponent = ({
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  boxShadow,
  children,
  style,
}) => {
  const theme = useTheme()

  const efectiveBackgroundColor = isBackgroundColor(backgroundColor)
    ? theme.background.colors[backgroundColor]
    : backgroundColor

  const efectiveBoxShadow = isBoxShadow(boxShadow) ? theme.shape.boxShadow[boxShadow] : boxShadow

  const efectiveBorderRadius = isBorderRadius(borderRadius)
    ? theme.shape.borderRadius[borderRadius]
    : borderRadius

  const efectiveBoderColor = isBorderColor(borderColor)
    ? theme.shape.borderColor[borderColor]
    : borderColor

  const efectiveBorderWidth = isBorderWidth(borderWidth)
    ? theme.shape.borderWidth[borderWidth]
    : borderWidth

  return (
    <div
      style={{
        ...style,
        backgroundColor: efectiveBackgroundColor,
        borderColor: efectiveBoderColor,
        borderRadius: efectiveBorderRadius ? `${efectiveBorderRadius}rem` : efectiveBorderRadius,
        borderStyle: borderColor !== undefined ? 'solid' : undefined,
        borderWidth: efectiveBorderWidth,
        boxShadow: efectiveBoxShadow,
      }}
    >
      {children}
    </div>
  )
}

export default BoxShape
