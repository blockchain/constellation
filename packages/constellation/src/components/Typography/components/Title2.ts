import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Title2 = createTypographyComponent({
  text: {
    fontSize: PXToRem(24),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(32.4),
  },
})

export default Title2
