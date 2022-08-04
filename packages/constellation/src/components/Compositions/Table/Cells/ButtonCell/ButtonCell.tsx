import React from 'react'

import { Button } from '../../..'
import { BaseCell } from '../'
import { ButtonCellComponentType } from '.'

const ButtonCell: ButtonCellComponentType = ({
  primaryOnClick,
  primaryText,
  secondaryOnClick,
  secondaryText,
}) => {
  return (
    <BaseCell>
      <Button text={primaryText} onClick={primaryOnClick} variant='minimal' size='small' />
      {secondaryText && (
        <Button text={secondaryText} onClick={secondaryOnClick} variant='minimal' size='small' />
      )}
    </BaseCell>
  )
}

export default ButtonCell
