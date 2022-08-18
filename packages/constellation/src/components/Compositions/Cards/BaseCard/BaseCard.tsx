import cx from 'classnames'
import React from 'react'

import { CloseButton } from '../../../Primitives'
import { BaseCardComponent } from './BaseCard.types'

const BaseCard: BaseCardComponent = ({
  accentColor,
  border,
  children,
  className,
  onCardClick,
  onCloseClick,
}) => {
  const Component = onCardClick ? 'button' : 'div'

  const handleCloseClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    onCloseClick?.(e)
  }

  return (
    <Component
      onClick={onCardClick}
      className={cx(
        'constellation drop-shadow-cards bg-background-ultra-light mode-light:bg-white-000 w-[327px] rounded-2xl p-4 flex gap-4 relative',
        {
          'border border-medium': border,
        },
        className,
      )}
      style={accentColor ? { borderColor: accentColor } : {}}
    >
      {onCloseClick && (
        <CloseButton onClick={handleCloseClick} className='absolute top-4 right-4' />
      )}

      {children}
    </Component>
  )
}

export default BaseCard
