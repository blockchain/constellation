import { isShapeBorderRadius } from 'components/Shape/utils'
import styled, { css } from 'styled-components'

import { BaseShape } from '../BaseShape'
import { BoxComponent } from './Box.types'

const Box = styled<BoxComponent>(BaseShape)`
  ${({ borderRadius, fullHeight, fullWidth, height, theme, width }) => css`
    ${() => {
      if (!borderRadius) return ''

      if (isShapeBorderRadius(theme, borderRadius)) {
        return css`
          border-radius: ${theme.shape.borderRadius[borderRadius]}rem;
        `
      }

      return css`
        border-radius: ${borderRadius}rem;
      `
    }}

    ${() => {
      if (fullWidth)
        return css`
          width: 100%;
        `

      if (!width) return ''

      return css`
        width: ${width}rem;
      `
    }}

    ${() => {
      if (fullHeight)
        return css`
          height: 100%;
        `

      if (!height) return ''

      return css`
        height: ${height}rem;
      `
    }}
  `}
`

export default Box
