import styled, { css } from 'styled-components'

const StyledLoadingText = styled.span<{
  backgroundColor: string
  borderRadius: number
  maxWidth: number
}>`
  ${({ backgroundColor, borderRadius, maxWidth }) => css`
    background-color: ${backgroundColor};
    max-width: ${maxWidth}rem;
    width: 100%;
    border-radius: ${borderRadius}rem;
    display: inline-flex;
    line-height: initial;
  `}
`

export { StyledLoadingText }
