import React from 'react'

import { BaseCell } from '../'
import { IconCellComponentType } from '.'

/**
 * IconCell extends the BaseCell component and displays an icon in a table.
 */

const IconCell: IconCellComponentType = ({ icon, isHeader }) => {
  return <BaseCell isHeader={isHeader}>{icon}</BaseCell>
}

export default IconCell
