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
  variant = 'base',
}) => {
  const Icon = icon as FC<IconProps>

  const genFontSizes = (
    text?: string,
    size?: string,
  ): { badge: string; base: string; double: string } => {
    const length = text?.length || 4

    switch (size) {
      case 'large':
        return {
          badge: length <= 4 ? 'text-[5px]' : 'text-[3px]',
          base: length <= 4 ? 'text-[12px]' : 'text-[8px]',
          double: length <= 4 ? 'text-[9px]' : 'text-[7px]',
        }
      case 'small':
        return {
          badge: length <= 4 ? 'text-[2.5px]' : 'text-[1.5px]',
          base: length <= 4 ? 'text-[6px]' : 'text-[4px]',
          double: length <= 4 ? 'text-[5px]' : 'text-[3.5px]',
        }
      default:
        return {
          badge: length <= 4 ? 'text-[3.5px]' : 'text-[2.5px]',
          base: length <= 4 ? 'text-[10px]' : 'text-[7px]',
          double: length <= 4 ? 'text-[8px]' : 'text-[6px]',
        }
    }
  }

  const fontSizes = useMemo(() => genFontSizes(text, size), [text, size])

  const genSizes = (
    singeVariant: 'base' | 'large' | 'small',
  ): { badge: string; base: string; double: string } => {
    switch (singeVariant) {
      case 'large':
        return {
          badge: 'w-4 h-4',
          base: 'w-10 h-10',
          double: 'w-8 h-8',
        }
      case 'small':
        return {
          badge: 'w-2 h-2',
          base: 'w-5 h-5',
          double: 'w-4 h-4',
        }
      default:
        return {
          badge: 'w-3 h-3',
          base: 'w-8 h-8',
          double: 'w-6 h-6',
        }
    }
  }

  const variantStyles = useMemo(() => genSizes(size), [size])

  return (
    <Avatar.Root
      className={cx(
        { '!rounded-full': circle },
        'rounded flex justify-center items-center bg-primary relative overflow-hidden',
        variantStyles[variant],
        className,
      )}
      style={backgroundColor && { backgroundColor }}
    >
      <>
        <Avatar.Image src={imgSrc} className='w-full h-full object-cover' />
        <Avatar.Fallback>
          {(icon && <Icon color={iconColor} />) || (
            <div className={cx('text-white-000', fontSizes[variant])}>{text}</div>
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
  size,
}) => {
  const badge = doubleVariant === 'badge'

  return (
    <div
      className={cx(
        'constellation w-8 h-10 relative flex justify-center items-center',
        {
          '!w-10 h-[52px]': size === 'large',
        },
        {
          '!w-5 !h-8': size === 'small',
        },
      )}
    >
      {secondaryContent && (
        <InternalLogo
          backgroundColor={secondaryContent.backgroundColor}
          circle={circle}
          text={secondaryContent.text}
          icon={secondaryContent.icon}
          iconColor={secondaryContent.iconColor}
          imgSrc={secondaryContent.imgSrc}
          variant={badge ? 'badge' : 'double'}
          size={size}
          className={cx(
            '!absolute bottom-0 right-0',
            {
              'border-2 border-background border-solid -mr-[2px] mb-[2px] z-10': badge,
            },
            { '!border !m-0 !mb-1': size === 'small' },
          )}
        />
      )}
      <InternalLogo
        backgroundColor={primaryContent.backgroundColor}
        circle={circle}
        text={primaryContent.text}
        icon={primaryContent.icon}
        iconColor={primaryContent.iconColor}
        imgSrc={primaryContent.imgSrc}
        variant={badge || !secondaryContent ? 'base' : 'double'}
        size={size}
        className={cx({
          '!absolute top-0 left-0 border-2 border-background border-solid -ml-[2px] -mt-[2px]':
            secondaryContent && !badge,
        })}
      />
    </div>
  )
}

export default Logo
