import styled, { css } from 'styled-components'

type StyledClickableAreaProps = {
  hoverBackgroundColor: string
  showBackgroundOnHover: boolean
}

export const StyledClickableArea = styled.div<StyledClickableAreaProps>`
  ${({ hoverBackgroundColor, showBackgroundOnHover }) => css`
    cursor: pointer;

    & > div {
      transition: transform 0.05s;
    }

    ${showBackgroundOnHover &&
    css`
      &:hover {
        background-color: ${hoverBackgroundColor};
      }
      &:active > div {
        transform: scale(0.98);
      }
    `}
  `}
`
