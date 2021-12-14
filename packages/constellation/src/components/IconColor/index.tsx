import { css } from 'styled-components'

import colors from '../../colors'

const iconColor = (colorCode: keyof typeof colors, hoverColorCode?: keyof typeof colors) => css`
  svg {
    & > path {
      fill: ${colors[colorCode]};
    }
    &:hover > path {
      fill: ${hoverColorCode ? colors[hoverColorCode] : colors[colorCode]};
    }
  }
`

export default iconColor
