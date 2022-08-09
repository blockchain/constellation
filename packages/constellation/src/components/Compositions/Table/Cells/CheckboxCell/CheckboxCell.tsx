import React from 'react'

import { BaseCell } from '../..'
import { CheckboxCellComponentType } from '.'

const CheckboxCell: CheckboxCellComponentType = ({ isHeader, text }) => {
  return (
    <BaseCell isHeader={isHeader}>
      <input type='checkbox' /> {/* TODO: Update this to the checkbox component when it is done */}
      <span>{text}</span>
    </BaseCell>
  )
}

export default CheckboxCell
