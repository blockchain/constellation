import PXToRem from 'utils/PXToRem'

import { createTypographyComponent } from '../utils'

const Title3 = createTypographyComponent({
  text: {
    fontSize: PXToRem(20),
    fontWeigth: 'semibold',
    lineHeight: PXToRem(30),
  },
})

export default Title3
