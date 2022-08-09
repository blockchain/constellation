import React from 'react'

import { Tag } from '../../../../Base'
import { BaseCell } from '../..'
import { InformationalCellComponentType } from '.'

/**
 * InformationalCell extends the BaseCell component and displays a tag component in the table
 * The Tag component can display text styles with any tag variant.
 */

const InformationalCell: InformationalCellComponentType = ({
  isHeader,
  text,
  variant = 'default',
}) => {
  return (
    <BaseCell isHeader={isHeader}>
      <Tag content={text} variant={variant} />
    </BaseCell>
  )
}

export default InformationalCell
