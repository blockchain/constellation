import PXToRem from 'utils/PXToRem'

import { createTypographyComponent } from '../utils'

const Body2 = createTypographyComponent({
  text: {
    fontSize: PXToRem(16),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(24),
  },
})

export default Body2
