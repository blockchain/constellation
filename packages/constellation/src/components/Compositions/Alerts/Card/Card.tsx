import cx from 'classnames'
import React from 'react'

import { SemanticColors, Text } from '../../../Base'
import { Button } from '../../../Primitives'
import { BaseCard } from '../../Cards'
import { AlertCardComponentType } from '.'

const variantTitleStyles = {
  default: '!text-title',
  error: '!text-error',
  success: '!text-success',
  warning: '!text-warning',
}

const variantColors = {
  default: undefined,
  error: SemanticColors.error,
  success: SemanticColors.success,
  warning: SemanticColors.warning,
}

const Card: AlertCardComponentType = ({
  content,
  primaryCta,
  secondaryCta,
  title,
  variant = 'default',
  ...baseCardProps
}) => {
  return (
    <BaseCard
      className='flex flex-col !gap-2'
      closeButtonClassName='top-2 right-2'
      border
      accentColor={variantColors[variant]}
      {...baseCardProps}
    >
      <Text variant='paragraph2' className={cx('!m-0', variantTitleStyles[variant])}>
        {title}
      </Text>
      <Text variant='caption1' className='!m-0 !text-title'>
        {content}
      </Text>
      {(primaryCta || secondaryCta) && (
        <div className='mt-2 flex flex-row gap-2'>
          {primaryCta && (
            <Button
              variant='secondary'
              size='small'
              text={primaryCta.text}
              onClick={primaryCta.onClick}
            />
          )}
          {secondaryCta && (
            <Button
              variant='secondary'
              size='small'
              text={secondaryCta.text}
              onClick={secondaryCta.onClick}
            />
          )}
        </div>
      )}
    </BaseCard>
  )
}

export default Card
