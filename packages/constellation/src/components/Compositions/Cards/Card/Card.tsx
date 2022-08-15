import cx from 'classnames'
import React from 'react'

import { IconCloseV2, PaletteColors, SemanticColors, Text } from '../../../Base'
import { Button, IconButton, Logo } from '../../index'
import { CardComponent } from './Card.types'

const Card: CardComponent = ({
  accentColor,
  border,
  button,
  buttonContent = 'GO',
  buttonOnClick,
  content,
  footer,
  header,
  logoContent,
  onClose,
  title,
  variant = 'default',
}) => {
  const variantStyles = {
    announcement: 'flex-row items-center pt-3',
    callout: 'flex-row items-center',
    default: 'flex-col',
  }

  const bodyVariantStyles = {
    announcement: 'body2',
    callout: 'paragraph2',
    default: 'paragraph1',
  }

  const isDefault = variant === 'default'

  return (
    <div
      className={cx(
        'constellation drop-shadow-cards bg-background-ultra-light mode-light:bg-white-000 w-[327px] rounded-2xl p-4 flex gap-4',
        variantStyles[variant],
        {
          'border border-medium': border,
        },
        { 'border-blue-400': variant === 'callout' },
      )}
      style={accentColor ? { borderColor: accentColor } : {}}
    >
      <IconButton
        icon={<IconCloseV2 color={PaletteColors['grey-400']} width={12} height={12} />}
        size='small'
        onClick={onClose}
        className={cx(
          'absolute top-4 right-4 border-none !bg-background-light mode-dark:!bg-grey-800 !w-6 !h-6 rounded-full !p-0 flex justify-center items-center',
          { 'top-3 right-3': !isDefault },
        )}
      />
      {logoContent && (
        <Logo primaryContent={logoContent} singleVariant={isDefault ? 'base' : 'large'} />
      )}
      {header}
      <div className='flex flex-col'>
        <Text
          variant={isDefault ? 'title3' : 'caption1'}
          className={cx('!m-0')}
          color={variant === 'announcement' ? SemanticColors.medium : SemanticColors.title}
        >
          {title}
        </Text>
        <Text
          variant={bodyVariantStyles[variant] as 'body2' | 'paragraph2' | 'paragraph1'}
          className='!m-0 !mt-1'
        >
          {content}
        </Text>
      </div>
      {(variant === 'callout' || button) && (
        <Button
          text={buttonContent}
          onClick={buttonOnClick}
          variant='primary'
          size={variant === 'callout' ? 'small' : 'default'}
          style={accentColor ? { backgroundColor: accentColor } : {}}
        />
      )}
      {footer}
    </div>
  )
}

export default Card
