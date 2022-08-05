import React from 'react'

import { BaseCell } from '../'
import { IconCellComponentType } from '.'

const IconCell: IconCellComponentType = ({ footer, header, icon }) => {
  return <BaseCell header={header} footer={footer} prefix={icon} />
}

export default IconCell
