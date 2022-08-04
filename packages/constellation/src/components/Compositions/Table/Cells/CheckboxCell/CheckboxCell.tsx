import React from 'react'

import { BaseCell } from '../'
import { CheckboxCellComponentType } from '.'

const CheckboxCell: CheckboxCellComponentType = ({ header, text }) => {
  return (
    <BaseCell header={header}>
      <input type='checkbox' /> {/* TODO: Update this to the checkbox component when it is done */}
      <span>{text}</span>
    </BaseCell>
  )
}

export default CheckboxCell
