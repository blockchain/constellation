import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const ParagraphMono = createTypographyComponent({
  text: {
    fontSize: PXToRem(14),
    fontStyle: 'numeric',
    fontWeigth: 'medium',
    lineHeight: PXToRem(21),
  },
})

export default ParagraphMono
