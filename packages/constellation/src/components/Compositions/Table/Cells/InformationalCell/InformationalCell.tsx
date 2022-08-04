import React from 'react'

import { Tag } from '../../../../Base'
import { BaseCell } from '../'
import { InformationalCellComponentType } from '.'

const InformationalCell: InformationalCellComponentType = ({ text }) => {
  return (
    <BaseCell>
      <Tag content={text} />
    </BaseCell>
  )
}

export default InformationalCell
