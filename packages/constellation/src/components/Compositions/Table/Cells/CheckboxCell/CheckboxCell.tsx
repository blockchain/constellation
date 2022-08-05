import React from 'react'

import { BaseCell } from '../'
import { CheckboxCellComponentType } from '.'

const CheckboxCell: CheckboxCellComponentType = ({ footer, header, text }) => {
  return (
    <BaseCell header={header} footer={footer}>
      <input type='checkbox' /> {/* TODO: Update this to the checkbox component when it is done */}
      <span>{text}</span>
    </BaseCell>
  )
}

export default CheckboxCell
