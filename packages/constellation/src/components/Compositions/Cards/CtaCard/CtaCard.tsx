import cx from 'classnames'
import React from 'react'

import { PaletteColors, SemanticColors, Text } from '../../../Base'
import { CtaCardComponent } from './CtaCard.types'
import { Card } from '../'

const CtaCard: CtaCardComponent = ({ variant, ...cardProps }) => {
  const isAnnouncement = variant === 'announcement'

  return <Card {...cardProps} button />
}

export default CtaCard
