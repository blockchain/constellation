import React from 'react'

import { Tag } from '../../../../Base'
import { BaseCell } from '../'
import { InformationalCellComponentType } from '.'

const InformationalCell: InformationalCellComponentType = ({ footer, header, text }) => {
  return (
    <BaseCell footer={footer} header={header}>
      <Tag content={text} />
    </BaseCell>
  )
}

export default InformationalCell
