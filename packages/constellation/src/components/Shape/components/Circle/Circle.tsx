import {
  isShapeBackgroundColor,
  isShapeBorderColor,
  isShapeBorderRadius,
  isShapeBorderWidth,
  isShapeBoxShadow,
} from 'components/Shape/utils'
import React from 'react'
import styled, { css } from 'styled-components'

import { CircleProps } from './Circle.types'

const Circle = styled(
  ({
    backgroundColor,
    borderColor,
    borderWidth,
    boxShadow,
    centerContent,
    size,
    ...props
  }: CircleProps) => <div {...props} />,
)`
  ${({
    backgroundColor = 'inherit',
    borderColor = 'inherit',
    borderWidth,
    boxShadow,
    centerContent = false,
    size = 4,
    theme,
  }) => css`
    width: ${size}rem;
    height: ${size}rem;
    border-radius: ${size}rem;

    background-color: ${isShapeBackgroundColor(theme, backgroundColor)
      ? theme.shape.backgroundColor[backgroundColor]
      : backgroundColor};

    border-color: ${isShapeBorderColor(theme, borderColor)
      ? theme.shape.borderColor[borderColor]
      : borderColor};

    border-width: ${isShapeBorderWidth(theme, borderWidth)
      ? theme.shape.borderWidth[borderWidth]
      : borderWidth}rem;

    box-shadow: ${isShapeBoxShadow(theme, boxShadow)
      ? theme.shape.boxShadow[boxShadow]
      : boxShadow};

    ${() => {
      if (centerContent) {
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
        `
      }

      return ''
    }}
  `}
`

export default Circle
