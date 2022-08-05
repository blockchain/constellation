import React from 'react'

import { Tag } from '../../../../Base'
import { BaseCell } from '../'
import { InformationalCellComponentType } from '.'

const InformationalCell: InformationalCellComponentType = ({ isFooter, isHeader, text }) => {
  return (
    <BaseCell isFooter={isFooter} isHeader={isHeader}>
      <Tag content={text} />
    </BaseCell>
  )
}

export default InformationalCell
