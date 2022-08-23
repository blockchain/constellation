import React from 'react'

import { Text } from '../../Base'
import { Button, Checkbox } from '../../Primitives'
import { FlyoutFooterProps, FooterCheckbox } from './Flyout.types'

/**
 * The FlyoutFooter can be passed to the Flyout component and serves as the main location for user actions.
 */

const FlyoutCheckbox = ({ text, ...args }: FooterCheckbox) => (
  <div className='flex items-center gap-4 p-4 rounded-lg bg-background-ultra-light border-solid border-medium mode-dark:bg-dark-900'>
    <Checkbox {...args} />
    <Text variant='paragraph2'>{text}</Text>
  </div>
)

const FlyoutFooter = ({
  primaryCheckbox,
  primaryCta,
  secondaryCheckbox,
  secondaryCta,
}: FlyoutFooterProps) => (
  <div className='constellation mt-4 flex flex-col gap-4 w-full'>
    {(primaryCheckbox || secondaryCheckbox) && (
      <div className='flex flex-col gap-2'>
        {primaryCheckbox && <FlyoutCheckbox {...primaryCheckbox} />}
        {secondaryCheckbox && <FlyoutCheckbox {...secondaryCheckbox} />}
      </div>
    )}
    <div className='flex flex-col gap-2'>
      <Button
        text={primaryCta.text}
        onClick={primaryCta.onClick}
        disabled={primaryCta.disabled}
        width='full'
      />
      {secondaryCta && (
        <Button
          width='full'
          variant='secondary'
          text={secondaryCta.text}
          onClick={secondaryCta.onClick}
          disabled={secondaryCta.disabled}
        />
      )}
    </div>
  </div>
)

export default FlyoutFooter
