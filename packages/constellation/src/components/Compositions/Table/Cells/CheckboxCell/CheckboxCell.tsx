import React from 'react'

import { Checkbox } from '../../../../Primitives'
import { BaseCell } from '../BaseCell'
import { CheckboxCellComponentType } from '.'

const CheckboxCell: CheckboxCellComponentType = ({ text, ...baseProps }) => {
  return (
    <BaseCell {...baseProps}>
      <Checkbox label={text} />
    </BaseCell>
  )
}

export default CheckboxCell
