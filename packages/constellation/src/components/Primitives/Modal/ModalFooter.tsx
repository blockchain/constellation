import React from 'react'

import { Button } from '../../Compositions'
import { ModalFooterProps } from './Modal.types'

/**
 * The ModalFooter can be passed to the Modal component and serves as the main location for user actions.
 */

const ModalFooter = ({ primaryCta, secondaryCta }: ModalFooterProps) => (
  <div className='constellation mt-4 flex justify-end gap-4'>
    {secondaryCta && (
      <Button
        width='full'
        variant='secondary'
        text={secondaryCta.text}
        onClick={secondaryCta.onClick}
      />
    )}
    <Button
      width={secondaryCta ? 'full' : 'auto'}
      text={primaryCta.text}
      onClick={primaryCta.onClick}
    />
  </div>
)

export default ModalFooter
