import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Caption2 = createTypographyComponent({
  text: {
    fontSize: PXToRem(12),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(18),
  },
})

export default Caption2
