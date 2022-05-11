import { isTextColor } from 'components/Text/utils'
import styled, { css } from 'styled-components'

import { BaseTextProps } from './BaseText.types'

const BaseText = styled.span<BaseTextProps>`
  ${({ color, fontSize = 1, fontStyle, fontWeigth = 'regular', lineHeight, theme }) => css`
    color: ${isTextColor(theme, color) ? theme.text.colors[color] : color};
    font-size: ${fontSize}rem;
    font-weight: ${theme.text.weights[fontWeigth]};
    line-height: ${lineHeight || fontSize * 1.5}rem;
  `}
`

export default BaseText
