import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Caption1 = createTypographyComponent({
  text: {
    fontSize: PXToRem(12),
    fontWeigth: 'medium',
    lineHeight: PXToRem(18),
  },
})

export default Caption1
