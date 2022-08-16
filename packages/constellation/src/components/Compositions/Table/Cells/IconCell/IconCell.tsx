import React from 'react'

import { BaseCell } from '../BaseCell'
import { IconCellComponentType } from '.'

/**
 * IconCell extends the BaseCell component and displays an icon in a table.
 */

const IconCell: IconCellComponentType = ({ icon, ...baseProps }) => {
  return <BaseCell {...baseProps}>{icon}</BaseCell>
}

export default IconCell
