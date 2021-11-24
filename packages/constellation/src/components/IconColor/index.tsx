import { css } from 'styled-components'

import colors from '../../colors'

const iconColor = (colorCode: keyof typeof colors, hoverColorCode?: keyof typeof colors) => css`
  fill: ${colors[colorCode]};

  &:hover {
    fill: ${hoverColorCode ? colors[hoverColorCode] : colors[colorCode]};
  }
`

export default iconColor
