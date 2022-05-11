import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Paragraph2 = createTypographyComponent({
  text: {
    fontSize: PXToRem(14),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(20),
  },
})

export default Paragraph2
