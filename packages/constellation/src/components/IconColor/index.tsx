import { css } from 'styled-components'

const iconColor = (colorCode: string, hoverColorCode?: string) => css`
  fill: ${colorCode};

  &:hover {
    fill: ${hoverColorCode ?? colorCode};
  }
`

export default iconColor
