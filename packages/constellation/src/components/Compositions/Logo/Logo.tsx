import cx from 'classnames'
import React from 'react'

import InternalLogo from './InternalLogo'
import { LogoComponent } from './Logo.types'

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
