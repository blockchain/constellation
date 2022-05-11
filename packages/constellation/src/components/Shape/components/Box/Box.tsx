import {
  isShapeBackgroundColor,
  isShapeBorderColor,
  isShapeBorderRadius,
  isShapeBorderWidth,
  isShapeBoxShadow,
} from 'components/Shape/utils'
import { isNumber } from 'lodash'
import React from 'react'
import styled, { css } from 'styled-components'

import { BoxProps } from './Box.types'

const Box = styled(
  ({
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    boxShadow,
    fullHeight,
    fullWidth,
    height,
    width,
    ...props
  }: BoxProps) => <div {...props} />,
)`
  ${({
    backgroundColor = 'inherit',
    borderColor = 'inherit',
    borderRadius,
    borderWidth,
    boxShadow,
    fullHeight,
    fullWidth,
    height,
    theme,
    width,
  }) => css`
    background-color: ${isShapeBackgroundColor(theme, backgroundColor)
      ? theme.shape.backgroundColor[backgroundColor]
      : backgroundColor};

    border-color: ${isShapeBorderColor(theme, borderColor)
      ? theme.shape.borderColor[borderColor]
      : borderColor};

    border-radius: ${isShapeBorderRadius(theme, borderRadius)
      ? theme.shape.borderRadius[borderRadius]
      : borderRadius}rem;

    border-width: ${isShapeBorderWidth(theme, borderWidth)
      ? theme.shape.borderWidth[borderWidth]
      : borderWidth}rem;

    box-shadow: ${isShapeBoxShadow(theme, boxShadow)
      ? theme.shape.boxShadow[boxShadow]
      : boxShadow};

    ${() => {
      if (fullWidth)
        return css`
          width: 100%;
        `

      if (isNumber(width))
        return css`
          width: ${width}rem;
        `

      if (width)
        return css`
          width: ${width};
        `

      return ''
    }}

    ${() => {
      if (fullHeight)
        return css`
          height: 100%;
        `

      if (isNumber(height))
        return css`
          height: ${height}rem;
        `

      if (height)
        return css`
          height: ${height};
        `

      return ''
    }}
  `}
`

export default Box
