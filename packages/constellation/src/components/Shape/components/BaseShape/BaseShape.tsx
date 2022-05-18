import {
  isShapeBackgroundColor,
  isShapeBorderColor,
  isShapeBorderWidth,
  isShapeBoxShadow,
} from 'components/Shape/utils'
import styled, { css } from 'styled-components'

import { BaseShapeProps } from './BaseShape.types'

const BaseShape = styled.div<BaseShapeProps>`
  ${({
    backgroundColor = 'inherit',
    borderColor = 'inherit',
    borderWidth,
    boxShadow,
    theme,
  }) => css`
    background-color: ${isShapeBackgroundColor(theme, backgroundColor)
      ? theme.shape.backgroundColor[backgroundColor]
      : backgroundColor};

    border-color: ${isShapeBorderColor(theme, borderColor)
      ? theme.shape.borderColor[borderColor]
      : borderColor};

    box-shadow: ${isShapeBoxShadow(theme, boxShadow)
      ? theme.shape.boxShadow[boxShadow]
      : boxShadow};

    ${() => {
      if (!borderWidth) return ''

      if (isShapeBorderWidth(theme, borderWidth)) {
        return css`
          border-style: solid;
          border-width: ${theme.shape.borderWidth[borderWidth]}rem;
        `
      }

      return css`
        border-style: solid;
        border-width: ${borderWidth}rem;
      `
    }}
  `}
`

export default BaseShape
