import styled, { css } from 'styled-components'

import { BaseButton } from '../BaseButton'
import { SecondaryButtonComponent } from './SecondaryButton.types'

const SecondaryButton: SecondaryButtonComponent = styled(BaseButton)`
  ${({ theme }) => {
    const { active, backgroundColor, borderRadius, color, disabled, focused, hover } =
      theme.secondaryButton

    return css`
      background-color: ${backgroundColor};
      color: ${color};
      border-radius: ${borderRadius}rem;

      &:hover {
        background-color: ${hover.backgroundColor};
      }

      &:active {
        background-color: ${active.backgroundColor};
      }

      &:disabled {
        background-color: ${disabled.backgroundColor};
        color: ${disabled.color};
      }

      &:focus {
        background-color: ${focused.backgroundColor};
      }
    `
  }}
`

export default SecondaryButton
