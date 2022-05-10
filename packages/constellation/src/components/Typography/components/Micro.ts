import { PXToRem } from 'utils'

import { createTypographyComponent } from '../utils'

const Micro = createTypographyComponent({
  text: {
    fontSize: PXToRem(10),
    fontWeigth: 'medium',
    lineHeight: PXToRem(15),
  },
})

export default Micro
