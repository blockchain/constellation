import styled, { css } from 'styled-components'

import { BaseButton } from '../BaseButton'
import { ButtonOverlayContainer } from '../BaseButton/BaseButton.styles'
import { MinimalButtonComponent } from './MinimalButton.types'

const MinimalButton: MinimalButtonComponent = styled(BaseButton)`
  ${({ theme }) => {
    const {
      active,
      backgroundColor,
      borderColor,
      borderRadius,
      color,
      disabled,
      focused,
      hover,
      overlay,
    } = theme.minimalButton

    return css`
      background-color: ${backgroundColor};
      color: ${color};
      border-radius: ${borderRadius}rem;
      border-color: ${borderColor};
      border-width: 0.0625rem;
      border-style: solid;
      margin: -0.0625rem;

      &:hover {
        background-color: ${hover.backgroundColor};
        border-color: ${hover.borderColor};
      }

      &:active {
        background-color: ${active.backgroundColor};
        border-color: ${active.borderColor};
      }

      &:disabled {
        background-color: ${disabled.backgroundColor};
        border-color: ${disabled.borderColor};
        color: ${disabled.color};
      }

      &:focus {
        background-color: ${focused.backgroundColor};
        border-color: ${focused.borderColor};
      }

      & ${ButtonOverlayContainer} {
        border-color: ${overlay.borderColor};
        color: ${overlay.color};
      }
    `
  }}
`

export default MinimalButton
