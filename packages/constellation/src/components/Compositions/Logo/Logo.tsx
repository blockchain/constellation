import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import React, { FC, useMemo } from 'react'

import { IconProps } from '../../Base/Icon'
import { InternalLogoComponent, LogoComponent } from './Logo.types'

const InternalLogo: InternalLogoComponent = ({
  backgroundColor,
  circle,
  className,
  icon,
  iconColor,
  imgSrc,
  size = 'base',
  text,
}) => {
  const Icon = icon as FC<IconProps>

  const genFontSizes = (
    text?: string,
  ): { badge: string; base: string; double: string; large: string } => {
    const length = text?.length || 4

    return {
      badge: length <= 4 ? 'text-[3.5px]' : 'text-[2.5px]',
      base: length <= 4 ? 'text-[10px]' : 'text-[7px]',
      double: length <= 4 ? 'text-[8px]' : 'text-[6px]',
      large: length <= 4 ? 'text-[12px]' : 'text-[9px]',
    }
  }

  const fontSizes = useMemo(() => genFontSizes(text), [text])

  const sizes = {
    badge: 'w-3 h-3',
    base: 'w-8 h-8',
    double: 'w-6 h-6',
    large: 'w-10 h-10',
  }

  return (
    <Avatar.Root
      className={cx(
        { '!rounded-full': circle },
        'rounded flex justify-center items-center bg-primary relative overflow-hidden',
        sizes[size],
        className,
      )}
      style={backgroundColor && { backgroundColor }}
    >
      <>
        <Avatar.Image src={imgSrc} className='w-full h-full object-cover' />
        <Avatar.Fallback>
          {(icon && <Icon color={iconColor} />) || (
            <div className={cx('text-white-000', fontSizes[size])}>{text}</div>
          )}
        </Avatar.Fallback>
      </>
    </Avatar.Root>
  )
}

const Logo: LogoComponent = ({
  circle = true,
  doubleVariant = 'primary',
  primaryContent,
  secondaryContent,
  singleVariant = 'base',
}) => {
  const badge = doubleVariant === 'badge'

  console.log(singleVariant)

  return (
    <div
      className={cx('constellation w-8 h-10 relative flex justify-center items-center', {
        '!w-10': singleVariant === 'large' && !secondaryContent,
      })}
    >
      {secondaryContent && (
        <InternalLogo
          backgroundColor={secondaryContent.backgroundColor}
          circle={circle}
          text={secondaryContent.text}
          icon={secondaryContent.icon}
          iconColor={secondaryContent.iconColor}
          imgSrc={secondaryContent.imgSrc}
          size={badge ? 'badge' : 'double'}
          className={cx('!absolute bottom-0 right-0', {
            '!w-3 !h-3 border-2 border-background border-solid -mr-[2px] mb-[2px] z-10': badge,
          })}
        />
      )}
      <InternalLogo
        backgroundColor={primaryContent.backgroundColor}
        circle={circle}
        text={primaryContent.text}
        icon={primaryContent.icon}
        iconColor={primaryContent.iconColor}
        imgSrc={primaryContent.imgSrc}
        size={!secondaryContent ? singleVariant : badge ? 'base' : 'double'}
        className={cx({
          '!absolute top-0 left-0 border-2 border-background border-solid -ml-[2px] -mt-[2px]':
            secondaryContent && !badge,
        })}
      />
    </div>
  )
}

export default Logo
