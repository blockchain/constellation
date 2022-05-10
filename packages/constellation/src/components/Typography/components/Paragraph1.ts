import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Paragraph1 = createTypographyComponent({
  text: {
    fontSize: PXToRem(14),
    fontWeigth: 'medium',
    lineHeight: PXToRem(21),
  },
})

export default Paragraph1
