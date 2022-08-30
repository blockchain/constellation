import React from 'react'

import { IconProps } from '../../../../Base'
import { BaseCell } from '../BaseCell'
import { IconCellComponentType } from '.'

/**
 * IconCell extends the BaseCell component and displays an icon in a table.
 */

const IconCell: IconCellComponentType = ({ icon, iconProps, ...baseProps }) => {
  const Icon = icon as React.FC<IconProps>
  return (
    <BaseCell {...baseProps}>
      <Icon {...iconProps} />
    </BaseCell>
  )
}

export default IconCell
