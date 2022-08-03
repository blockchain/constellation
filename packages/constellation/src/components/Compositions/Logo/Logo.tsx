import cx from 'classnames'
import React from 'react'
import { Textfit } from 'react-textfit'

import { InternalLogoComponent, LogoComponent } from './Logo.types'

const InternalLogo: InternalLogoComponent = ({ circle, className, value }) => {
  return (
    <div
      className={cx(
        { '!rounded-full': circle },
        'w-8 h-8 rounded flex justify-center items-center bg-primary relative overflow-hidden',
        className,
      )}
    >
      {typeof value === 'string' ? (
        <div className='w-[80%]'>
          <Textfit mode='single' className='text-white-000' forceSingleModeWidth={false}>
            {value}
          </Textfit>
        </div>
      ) : (
        value
      )}
    </div>
  )
}

const Logo: LogoComponent = ({
  circle = true,
  primary,
  secondary,
  secondaryVariant = 'primary',
}) => {
  const badge = secondaryVariant === 'badge'

  return (
    <div className='constellation w-8 h-10 relative flex justify-center items-center'>
      {secondary && (
        <InternalLogo
          circle={circle}
          value={secondary}
          className={cx('!absolute !w-6 !h-6 bottom-0 right-0', {
            '!w-3 !h-3 border-2 border-background border-solid -mr-[2px] mb-[2px] z-10': badge,
          })}
        />
      )}
      <InternalLogo
        circle={circle}
        value={primary}
        className={cx({
          '!absolute !w-6 !h-6 top-0 left-0 border-2 border-background border-solid -ml-[2px] -mt-[2px]':
            secondary && !badge,
        })}
      />
    </div>
  )
}

export default Logo
