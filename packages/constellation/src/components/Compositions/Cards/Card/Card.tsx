import cx from 'classnames'
import React from 'react'

import { PaletteColors, SemanticColors, Text } from '../../../Base'
import { Button } from '../../../Primitives'
import { Logo } from '../../Logo'
import { BaseCard } from '../BaseCard'
import { CardComponent } from '.'

const Card: CardComponent = ({
  accentColor,
  border = false,
  button,
  buttonContent = 'GO',
  content,
  header,
  logoContent,
  onButtonClick,
  onCardClick,
  onCloseClick,
  title,
  variant = 'default',
}) => {
  const variantStyles = {
    announcement: 'flex-row items-center pt-3',
    callout: 'flex-row items-center',
    cta: 'flex-col items-start',
    default: 'flex-col',
  }

  const bodyVariantStyles = {
    announcement: 'body2',
    callout: 'paragraph2',
    cta: 'paragraph1',
    default: 'paragraph1',
  }

  const titleVariantStyles = {
    announcement: 'caption1',
    callout: 'caption1',
    cta: 'body2',
    default: 'title3',
  }

  const isDefault = variant === 'default'
  const isCta = variant === 'cta'

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    onButtonClick?.()
  }

  const isCallout = variant === 'callout'
  const isAnnouncement = variant === 'announcement'

  return (
    <BaseCard
      accentColor={accentColor || (isCallout ? PaletteColors['blue-400'] : undefined)}
      border={border}
      className={variantStyles[variant]}
      onCloseClick={!isCallout ? onCloseClick : undefined}
      onCardClick={onCardClick}
    >
      <div className='flex flex-row items-center gap-2'>
        {logoContent && (
          <Logo primaryContent={logoContent} size={isDefault || isCta ? 'base' : 'large'} />
        )}
        {header}
      </div>

      <div
        className={cx('flex flex-col', {
          'w-44': isAnnouncement || isCallout,
        })}
      >
        <Text
          variant={titleVariantStyles[variant] as 'caption1' | 'body2' | 'title3'}
          className='!m-0 w-full'
          truncate={isAnnouncement || isCallout}
          color={isAnnouncement ? SemanticColors.medium : SemanticColors.title}
        >
          {title}
        </Text>
        <Text
          variant={bodyVariantStyles[variant] as 'body2' | 'paragraph2' | 'paragraph1'}
          truncate={isCallout}
          lineClamp={isAnnouncement ? 2 : 0}
          className='!m-0 !mt-1 w-full'
        >
          {content}
        </Text>
      </div>
      {(isCallout || button) && (
        <Button
          text={buttonContent}
          onClick={handleButtonClick}
          variant='primary'
          size={isCallout ? 'small' : 'default'}
          className={cx({ 'ml-auto': isCallout })}
          style={accentColor ? { backgroundColor: accentColor } : undefined}
        />
      )}
    </BaseCard>
  )
}

export default Card
