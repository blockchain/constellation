import React from 'react'

import { Button } from '../../..'
import { BaseCell } from '../'
import { ButtonCellComponentType } from '.'

const ButtonCell: ButtonCellComponentType = ({
  isFooter,
  isHeader,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <BaseCell isHeader={isHeader} isFooter={isFooter}>
      <Button
        text={primaryButton.text}
        onClick={primaryButton.onClick}
        variant={primaryButton.variant || 'minimal'}
        size='small'
      />
      {secondaryButton && (
        <Button
          text={secondaryButton.text}
          onClick={secondaryButton.onClick}
          variant={secondaryButton.variant || 'minimal'}
          size='small'
        />
      )}
    </BaseCell>
  )
}

export default ButtonCell
