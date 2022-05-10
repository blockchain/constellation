import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const BodyMono = createTypographyComponent({
  text: {
    fontSize: PXToRem(16),
    fontStyle: 'numeric',
    fontWeigth: 'medium',
    lineHeight: PXToRem(24),
  },
})

export default BodyMono
