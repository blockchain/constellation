import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Subheading = createTypographyComponent({
  text: {
    fontSize: PXToRem(20),
    fontWeigth: 'medium',
    lineHeight: PXToRem(30),
  },
})

export default Subheading
