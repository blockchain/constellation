import cx from 'classnames'
import React from 'react'

import { IconCloseV2, PaletteColors, SemanticColors, Text } from '../../Base'
import { Button, IconButton, Logo } from '../index'
import { CardComponent } from './Card.types'

const Card: CardComponent = ({
  border,
  content,
  ctas,
  logoContent,
  title,
  variant = 'default',
}) => {
  const variantStyles = {
    announcements: 'flex-row items-center pt-3',
    callout: 'flex-row items-center',
    default: 'flex-col',
  }

  const bodyVariantStyles = {
    announcements: 'body2',
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
    >
      <IconButton
        icon={<IconCloseV2 color={PaletteColors['grey-400']} width={12} height={12} />}
        size='small'
        className={cx(
          'absolute top-4 right-4 border-none !bg-background-light mode-dark:!bg-grey-800 !w-6 !h-6 rounded-full !p-0 flex justify-center items-center',
          { 'top-3 right-3': !isDefault },
        )}
      />
      <Logo primaryContent={logoContent} singleVariant={isDefault ? 'base' : 'large'} />
      <div className='flex flex-col'>
        <Text
          variant={isDefault ? 'title3' : 'caption1'}
          className={cx('!m-0')}
          color={variant === 'announcements' ? SemanticColors.medium : SemanticColors.title}
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
      {(ctas || variant === 'callout') && (
        <Button
          text='Notify Me'
          variant='primary'
          size={variant === 'callout' ? 'small' : 'default'}
        />
      )}
    </div>
  )
}

export default Card
