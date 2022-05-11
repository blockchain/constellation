import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Body1 = createTypographyComponent({
  text: {
    fontSize: PXToRem(16),
    fontWeigth: 'medium',
    lineHeight: PXToRem(24),
  },
})

export default Body1
