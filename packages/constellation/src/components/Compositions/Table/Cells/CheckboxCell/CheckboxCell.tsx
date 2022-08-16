import React from 'react'

import { BaseCell } from '../BaseCell'
import { CheckboxCellComponentType } from '.'

const CheckboxCell: CheckboxCellComponentType = ({ text, ...baseProps }) => {
  return (
    <BaseCell {...baseProps}>
      <input type='checkbox' /> {/* TODO: Update this to the checkbox component when it is done */}
      <span>{text}</span>
    </BaseCell>
  )
}

export default CheckboxCell
