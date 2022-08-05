import React from 'react'

import { Button } from '../../..'
import { BaseCell } from '../'
import { ButtonCellComponentType } from '.'

const ButtonCell: ButtonCellComponentType = ({
  footer,
  header,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <BaseCell header={header} footer={footer}>
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
