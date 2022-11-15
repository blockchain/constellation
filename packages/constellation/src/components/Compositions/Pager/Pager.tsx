import cx from 'classnames'
import React from 'react'

import { IconArrowLeft, PaletteColors, SemanticColors } from '../../Base'
import { IconButton } from '../../Primitives/Buttons'
import { ArrowProps, IndicatorProps, PagerComponent } from './Pager.types'

const Indicator = ({ index, onChange, selected }: IndicatorProps) => (
  <button
    className={cx('w-2 h-2 bg-medium rounded-full outline-none border-none', {
      'bg-primary': selected,
    })}
    onClick={() => onChange(index)}
    aria-label='current page indicator'
  />
)

const Arrow = ({ direction, disabled, onChange, selectedPage }: ArrowProps) => (
  <IconButton
    icon={
      <IconArrowLeft
        width={24}
        height={24}
        color={disabled ? PaletteColors['grey-400'] : SemanticColors.primary}
        className={cx({ 'rotate-180': direction === 'right' })}
      />
    }
    aria-label={`page indicator arrow ${direction}`}
    size='small'
    disabled={disabled}
    onClick={() => onChange(selectedPage + (direction === 'right' ? 1 : -1))}
  />
)

/**
 * Pager is a component that displays a set of page indicators and arrows to
 * navigate between pages.
 */

const Pager: PagerComponent = ({ onChange, selectedPage = 0, totalPages = 5 }) => {
  return (
    <div className='constellation flex items-center justify-between w-full'>
      <Arrow
        direction='left'
        disabled={selectedPage === 0}
        onChange={onChange}
        selectedPage={selectedPage}
      />
      <div className='flex gap-[10px]'>
        {[...Array(totalPages)].map((el, index) => (
          <Indicator
            selected={index === selectedPage}
            key={index}
            index={index}
            onChange={onChange}
          />
        ))}
      </div>
      <Arrow
        direction='right'
        disabled={selectedPage === totalPages - 1}
        onChange={onChange}
        selectedPage={selectedPage}
      />
    </div>
  )
}

export default Pager
