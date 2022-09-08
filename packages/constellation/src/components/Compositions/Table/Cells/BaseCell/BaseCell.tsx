import cx from 'classnames'
import React, { useMemo } from 'react'

import { IconMinus, IconTriangleDown, IconTriangleUp, SemanticColors } from '../../../../Base'
import { BaseCellComponent } from '.'

/**
 * BaseCell has all the basic styles for a cell in a table.
 * It is used as the base for the other cells but can also
 * be used on its own to make custom cells down the line.
 */

const alignmentStyles = {
  center: 'justify-center',
  left: 'justify-start',
  right: 'justify-end',
}

const BaseCell: BaseCellComponent = ({
  align = 'left',
  children,
  isHeader,
  sort,
  toggleSort,
  width = 'auto',
}) => {
  const Component = isHeader ? 'th' : 'td'
  const SortArrow = useMemo(() => {
    switch (sort) {
      case 'desc':
        return <IconTriangleDown color={SemanticColors.primary} />
      case 'asc':
        return <IconTriangleUp color={SemanticColors.primary} />
      default:
        return <IconMinus color={SemanticColors.primary} width='9px' className='ml-1' />
    }
  }, [sort])

  return (
    <Component
      className={cx(
        'constellation relative h-full px-4 font-medium',
        {
          'cursor-pointer select-none': toggleSort,
        },
        { 'w-auto': width === 'auto' },
        { 'w-[1%]': width === 'content' },
        { 'w-full': width === 'fill' },
      )}
      onClick={toggleSort}
    >
      <div className={cx('flex flex-row items-center h-full gap-2', alignmentStyles[align])}>
        {children}
        {toggleSort && SortArrow}
      </div>
    </Component>
  )
}

export default BaseCell
