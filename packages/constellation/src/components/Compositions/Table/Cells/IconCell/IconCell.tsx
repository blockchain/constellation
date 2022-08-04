import React from 'react'

import { BaseCell } from '../'
import { IconCellComponentType } from '.'

const IconCell: IconCellComponentType = ({ header, icon }) => {
  return <BaseCell header={header} prefix={icon} />
}

export default IconCell
