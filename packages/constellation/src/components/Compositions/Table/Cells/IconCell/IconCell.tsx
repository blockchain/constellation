import React from 'react'

import { BaseCell } from '../'
import { IconCellComponentType } from '.'

const IconCell: IconCellComponentType = ({ isFooter, isHeader, icon }) => {
  return <BaseCell isHeader={isHeader} isFooter={isFooter} prefix={icon} />
}

export default IconCell
