import styled, { css } from 'styled-components'

const StyledAnimatedContainer = styled.div<{ height: number; width: number }>`
  ${({ height, width }) => css`
    transition-property: width, height;
    transition-duration: 300ms;
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
  `}
`

export { StyledAnimatedContainer }
