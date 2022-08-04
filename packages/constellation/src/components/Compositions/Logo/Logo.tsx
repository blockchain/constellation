import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import React, { FC } from 'react'
import { Textfit } from 'react-textfit'

import { IconProps } from '../../Base/Icon'
import { InternalLogoComponent, LogoComponent } from './Logo.types'

const InternalLogo: InternalLogoComponent = ({
  backgroundColor,
  circle,
  className,
  icon,
  iconColor,
  imgSrc,
  text,
}) => {
  const Icon = icon as FC<IconProps>

  return (
    <Avatar.Root
      className={cx(
        { '!rounded-full': circle },
        'w-8 h-8 rounded flex justify-center items-center bg-primary relative overflow-hidden',
        className,
      )}
      style={backgroundColor && { backgroundColor }}
    >
      <>
        <Avatar.Image src={imgSrc} className='w-full h-full object-cover' />
        <Avatar.Fallback>
          {(icon && <Icon color={iconColor} />) || (
            <div className='w-[80%]'>
              <Textfit mode='single' className='text-white-000'>
                {text}
              </Textfit>
            </div>
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
}) => {
  const badge = doubleVariant === 'badge'
  const hasSecondary = secondaryContent !== undefined

  return (
    <div className='constellation w-8 h-10 relative flex justify-center items-center'>
      {hasSecondary && (
        <InternalLogo
          backgroundColor={secondaryContent.backgroundColor}
          circle={circle}
          text={secondaryContent.text}
          icon={secondaryContent.icon}
          iconColor={secondaryContent.iconColor}
          imgSrc={secondaryContent.imgSrc}
          className={cx('!absolute !w-6 !h-6 bottom-0 right-0', {
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
        className={cx({
          '!absolute !w-6 !h-6 top-0 left-0 border-2 border-background border-solid -ml-[2px] -mt-[2px]':
            hasSecondary && !badge,
        })}
      />
    </div>
  )
}

export default Logo
