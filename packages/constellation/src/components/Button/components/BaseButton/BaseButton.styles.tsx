import styled, { css } from 'styled-components'

import { BaseButtonTheme } from './theme'

export const ButtonChildrenContainer = styled.div<{ hide: boolean }>`
  transition: opacity ${({ theme }) => theme.baseButton.overlay.transitionTimeInMilliseconds}ms;

  ${({ hide }) =>
    hide
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`

export const ButtonOverlayContainer = styled.div<{ show: boolean }>`
  transition: opacity ${({ theme }) => theme.baseButton.overlay.transitionTimeInMilliseconds}ms;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ show }) =>
    show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`

export const StyledButton = styled.button<{
  fullWidth: boolean
  rounded: boolean
  size: keyof BaseButtonTheme['sizes']
}>`
  ${({ fullWidth, rounded, size = 'medium', theme }) => {
    const { onClickTransformationDurationInMilliseconds, overlay, sizes } = theme.baseButton

    const {
      fontSize,
      fontWeight,
      gap,
      horizontalPadding,
      iconSize,
      lineHeight,
      overlaySize,
      verticalPadding,
    } = sizes[size]

    const height = lineHeight + verticalPadding * 2

    return css`
      padding: ${verticalPadding}rem ${horizontalPadding}rem;
      position: relative;
      font-size: ${fontSize}rem;
      font-weight: ${fontWeight};
      line-height: ${lineHeight}rem;
      border: none;
      cursor: pointer;
      outline: none;
      display: inline-flex;
      justify-content: center;
      transition: transform ${onClickTransformationDurationInMilliseconds}ms;

      ${rounded
        ? css`
            border-radius: 100rem !important;
          `
        : ''}

      ${fullWidth
        ? css`
            width: 100%;
          `
        : ''}

      & ${ButtonChildrenContainer} {
        display: inline-flex;
        gap: ${gap}rem;
        align-items: center;

        svg {
          width: ${iconSize}rem;
          height: ${iconSize}rem;
          box-sizing: border-box;
        }
      }

      & ${ButtonOverlayContainer} {
        font-size: ${overlaySize}rem;
        color: ${overlay.color};
      }

      &:active {
        transform: scale(0.96);
      }
    `
  }}
`
