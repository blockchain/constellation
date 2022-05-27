import styled, { css } from 'styled-components'

import { BaseButton } from '../BaseButton'
import { ButtonOverlayContainer } from '../BaseButton/BaseButton.styles'
import { LinkButtonComponent } from './LinkButton.types'

const LinkButton: LinkButtonComponent = styled(BaseButton)`
  ${({ theme }) => {
    const { active, color, disabled, focused, hover, overlay } = theme.linkButton

    return css`
      background-color: transparent;
      color: ${color};

      &:hover {
        color: ${hover.color};
        text-decoration: underline;
      }

      &:active {
        color: ${active.color};
        text-decoration: underline;
      }

      &:disabled {
        color: ${disabled.color};
      }

      &:focus {
        color: ${focused.color};
        text-decoration: underline;
      }

      & ${ButtonOverlayContainer} {
        color: ${overlay.color};
      }
    `
  }}
`

export default LinkButton
