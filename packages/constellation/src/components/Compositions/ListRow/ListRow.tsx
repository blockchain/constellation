import cx from 'classnames'
import React, { ReactElement } from 'react'

import { IconChevronRightV2, IconProps, PaletteColors, SemanticColors, Text } from '../../Base'
import { Switch, Tag } from '../../Primitives'
import { Logo } from '../index'
import { ListRowComponent } from './ListRow.types'

/**
 * TitleByline is an internal component that handles the title and
 * byline on both the left and right side of the ListRow.
 */

const TitleByline = ({
  byline,
  icon,
  title,
}: {
  byline?: string
  icon?: React.ReactNode
  title?: string
}) =>
  title || byline ? (
    <div className='flex flex-col justify-center gap-[3px]'>
      {(title || icon) && (
        <div className='flex items-center gap-1 text-grey-400'>
          <Text variant='body2' className='!m-0' color={SemanticColors.title}>
            {title}
          </Text>
          {icon}
        </div>
      )}
      {byline && (
        <Text variant='paragraph1' className='!m-0' color={SemanticColors.body}>
          {byline}
        </Text>
      )}
    </div>
  ) : null

/**
 * List Row is a component that allows information to be
 * displayed and for the user to take actions on that information.
 */

const ListRow: ListRowComponent = ({
  as,
  description,
  icon,
  imgAlt,
  imgSrc,
  leftByline,
  leftTitle,
  logoProps,
  onClick,
  onToggleChange,
  rightByline,
  rightTitle,
  showArrow,
  tagText,
  tagVariant = 'default',
  titleIcon,
}) => {
  const Component = as || onClick ? 'button' : 'div'

  // stop onClick being called when toggling the switch
  const handleToggleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
  }

  const hasDescription = description

  return (
    <Component
      className={cx(
        'constellation flex flex-row gap-4 p-4 bg-background w-full items-center',
        {
          'cursor-pointer': onClick,
        },
        { '!items-start': hasDescription },
      )}
      onClick={onClick}
    >
      <div className={cx('flex flex-row items-center gap-4', { '!h-[47px]': hasDescription })}>
        {icon &&
          React.cloneElement(
            icon as ReactElement<IconProps>,
            {
              color: PaletteColors['grey-400'],
              size: 'medium',
            } as IconProps,
          )}
        {logoProps && <Logo {...logoProps} />}
        {imgSrc && imgAlt && <Logo circle={false} primaryContent={{ imgSrc, text: imgAlt }} />}
      </div>

      <div className='flex flex-grow flex-col'>
        <div className='flex flex-grow justify-between items-center'>
          <TitleByline title={leftTitle} byline={leftByline} icon={titleIcon} />
          <TitleByline title={rightTitle} byline={rightByline} />
        </div>
        {hasDescription && (
          <>
            <Text variant='caption1'>{description}</Text>
            {tagText && <Tag variant={tagVariant} content={tagText} />}
          </>
        )}
      </div>

      <div className={cx('flex flex-row items-center gap-4', { '!h-[47px]': hasDescription })}>
        {((onClick && showArrow === undefined) || showArrow) && (
          <IconChevronRightV2 size='medium' color={PaletteColors['grey-400']} />
        )}
        {onToggleChange && <Switch onCheckedChange={onToggleChange} onClick={handleToggleClick} />}
        {tagText && !hasDescription && <Tag variant={tagVariant} content={tagText} />}
      </div>
    </Component>
  )
}

export default ListRow
