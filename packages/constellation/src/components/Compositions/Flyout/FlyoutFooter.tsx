import React from 'react'

import { Button } from '../../Primitives/Buttons'
import { FlyoutFooterProps } from './Flyout.types'

/**
 * The FlyoutFooter can be passed to the Flyout component and serves as the main location for user actions.
 */

const FlyoutFooter = ({ primaryCta, secondaryCta }: FlyoutFooterProps) => (
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

export default FlyoutFooter
