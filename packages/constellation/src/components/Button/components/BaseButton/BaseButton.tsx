import styled, { css } from 'styled-components'

import { BaseButtonProps, BaseButtonStyle } from './BaseButton.types'

const BaseButton = styled.button<BaseButtonProps>`
  ${({
    activeStyle,
    defaultStyle,
    disabledStyle,
    focusedStyle,
    fullWidth,
    hoverStyle,
    isLoading,
    loadingStyle,
  }) => {
    const applyBaseButtonStyle = ({
      backgroundColor,
      border,
      borderRadius,
    }: BaseButtonStyle) => css`
      ${border !== undefined ? `border: ${border};` : 'border: none;'}
      ${backgroundColor !== undefined ? `background-color: ${backgroundColor};` : ''}
      ${borderRadius !== undefined ? `border-radius: ${borderRadius}rem;` : ''}
    `
    return css`
      cursor: pointer;
      padding: 0;

      ${defaultStyle ? applyBaseButtonStyle(defaultStyle) : ''}

      ${isLoading && loadingStyle ? applyBaseButtonStyle(loadingStyle) : ''}

        &:active {
        ${activeStyle ? applyBaseButtonStyle(activeStyle) : ''}
      }

      &:hover {
        ${hoverStyle ? applyBaseButtonStyle(hoverStyle) : ''}
      }

      &:focus {
        ${focusedStyle ? applyBaseButtonStyle(focusedStyle) : ''}
      }

      &:disabled {
        cursor: not-allowed;

        ${disabledStyle ? applyBaseButtonStyle(disabledStyle) : ''}
      }

      ${fullWidth
        ? css`
            width: 100%;
          `
        : ''}
    `
  }}
`

export default BaseButton
