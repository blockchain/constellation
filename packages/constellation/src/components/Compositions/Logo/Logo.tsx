import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import React from 'react'
import { Textfit } from 'react-textfit'

import { InternalLogoComponent, LogoComponent } from './Logo.types'

const InternalLogo: InternalLogoComponent = ({
  circle,
  className,
  color,
  icon,
  imgAlt,
  imgSrc,
  text,
}) => {
  return (
    <Avatar.Root
      className={cx(
        { '!rounded-full': circle },
        'w-8 h-8 rounded flex justify-center items-center bg-primary relative overflow-hidden',
        className,
      )}
      style={color && { backgroundColor: color }}
    >
      {text && (
        <div className='w-[80%]'>
          <Textfit mode='single' className='text-white-000'>
            {text}
          </Textfit>
        </div>
      )}
      {icon}
      {imgSrc && (
        <>
          <Avatar.Image src={imgSrc} className='w-full h-full object-cover' />
          <Avatar.Fallback>
            <div className='w-[80%]'>
              <Textfit mode='single' className='text-white-000'>
                {imgAlt}
              </Textfit>
            </div>
          </Avatar.Fallback>
        </>
      )}
    </Avatar.Root>
  )
}

const Logo: LogoComponent = ({
  backgroundColor,
  circle = true,
  primaryIcon,
  primaryImgAlt,
  primaryImgSrc,
  primaryText,
  secondaryIcon,
  secondaryImgAlt,
  secondaryImgSrc,
  secondaryText,
  secondaryVariant = 'primary',
}) => {
  const badge = secondaryVariant === 'badge'
  const hasSecondary = secondaryText || secondaryIcon

  return (
    <div className='constellation w-8 h-10 relative flex justify-center items-center'>
      {hasSecondary && (
        <InternalLogo
          color={backgroundColor}
          circle={circle}
          text={secondaryText}
          icon={secondaryIcon}
          imgSrc={secondaryImgSrc}
          imgAlt={secondaryImgAlt}
          className={cx('!absolute !w-6 !h-6 bottom-0 right-0', {
            '!w-3 !h-3 border-2 border-background border-solid -mr-[2px] mb-[2px] z-10': badge,
          })}
        />
      )}
      <InternalLogo
        color={backgroundColor}
        circle={circle}
        text={primaryText}
        icon={primaryIcon}
        imgSrc={primaryImgSrc}
        imgAlt={primaryImgAlt}
        className={cx({
          '!absolute !w-6 !h-6 top-0 left-0 border-2 border-background border-solid -ml-[2px] -mt-[2px]':
            hasSecondary && !badge,
        })}
      />
    </div>
  )
}

export default Logo
