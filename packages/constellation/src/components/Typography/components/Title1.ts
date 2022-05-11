import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Title1 = createTypographyComponent({
  text: {
    fontSize: PXToRem(32),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(40),
  },
})

export default Title1
