import React from 'react'

import { BaseCell } from '../'
import { CheckboxCellComponentType } from '.'

const CheckboxCell: CheckboxCellComponentType = ({ isFooter, isHeader, text }) => {
  return (
    <BaseCell isHeader={isHeader} isFooter={isFooter}>
      <input type='checkbox' /> {/* TODO: Update this to the checkbox component when it is done */}
      <span>{text}</span>
    </BaseCell>
  )
}

export default CheckboxCell
