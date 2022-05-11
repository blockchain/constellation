import styled, { css } from 'styled-components'

import { BaseShape } from '../BaseShape'
import { CircleComponent } from './Circle.types'

const Circle = styled<CircleComponent>(BaseShape)`
  ${({ centerContent = false, size = 4 }) => css`
    width: ${size}rem;
    height: ${size}rem;
    border-radius: ${size / 2}rem;

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
