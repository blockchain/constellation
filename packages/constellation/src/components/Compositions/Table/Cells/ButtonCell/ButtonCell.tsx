import React from 'react'

import { Button } from '../../../../Primitives/Buttons'
import { BaseCell } from '../index'
import { ButtonCellComponentType } from '.'

/**
 * ButtonCell allows users to take actions in a table.
 * The ButtonCell can display up to two buttons that support
 * primary, secondary, and minimal variants.
 */

const ButtonCell: ButtonCellComponentType = ({ primaryButton, secondaryButton, ...baseProps }) => {
  return (
    <BaseCell {...baseProps}>
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
