import { Close, Description, Title } from '@radix-ui/react-dialog'
import cx from 'classnames'
import React, { ReactElement } from 'react'

import { IconArrowLeft, IconProps, SemanticColors, Text } from '../../Base'
import { CloseButton, IconButton } from '../../Primitives'
import { HeaderComponent } from './Flyout.types'

/**
 * Internal component for the optional accessible description
 */
const FlyoutHeader: HeaderComponent = ({
  byline,
  exitType = 'close',
  icon,
  iconPos = 'left',
  onExit,
  title,
}) => {
  const hasByline = !!byline && exitType === 'close'

  return (
    <div className='flex gap-5 items-center mb-4'>
      {exitType === 'back' ? (
        <IconButton
          icon={<IconArrowLeft color={SemanticColors.muted} width={16} height={16} />}
          size='small'
          onClick={onExit}
          className='!h-4 !p-0 border-none'
        />
      ) : (
        <Close
          className={cx(
            'constellation absolute top-4 right-4 inline-flex items-center justify-center rounded-full h-',
            'focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75',
          )}
        >
          <CloseButton as='div' size='large' />
        </Close>
      )}
      <div
        className={cx(
          'flex',
          { 'flex-col': hasByline },
          {
            '!flex-row-reverse justify-between w-full': iconPos === 'right' && exitType === 'back',
          },
        )}
      >
        <div className={cx({ 'mr-4': iconPos === 'left' }, { 'mb-4': hasByline })}>
          {icon &&
            React.cloneElement(
              icon as ReactElement<IconProps>,
              {
                color: SemanticColors.muted,
                height: hasByline ? 32 : 24,
                width: hasByline ? 32 : 24,
              } as IconProps,
            )}
        </div>

        <div>
          <Title className='constellation text-base font-medium text-title'>{title}</Title>
          {byline && (
            <Description className='constellation mt-1 text-sm font-normal text-body'>
              <Text variant='paragraph1' color={SemanticColors.body}>
                {byline}
              </Text>
            </Description>
          )}
        </div>
      </div>
    </div>
  )
}

export default FlyoutHeader
