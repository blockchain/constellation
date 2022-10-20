import cx from 'classnames'
import React from 'react'

import { FlexComponent } from './Flex.types'

const flexAlignItemsStyles = {
  baseline: 'items-baseline',
  center: 'items-center',
  end: 'items-end',
  'flex-end': 'items-end',
  'flex-start': 'items-start',
  start: 'items-start',
  stretch: 'items-stretch',
}

const flexJustfiyStyles = {
  center: 'justify-center',
  'flex-end': 'justify-end',
  'flex-start': 'justify-start',
  'space-around': 'justify-around',
  'space-between': 'justify-between',
  'space-evenly': 'justify-evenly',
}

const flexDirectionStyles = {
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
}

const widthStyles = {
  auto: 'w-auto',
  content: 'w-[1%]',
  fill: 'w-full',
}

const Flex: FlexComponent = ({
  alignItems,
  children,
  flexDirection,
  gap,
  grow,
  justifyContent,
  width,
}) => (
  <div
    className={cx(
      'constellation flex',
      justifyContent && flexJustfiyStyles[justifyContent],
      alignItems && flexAlignItemsStyles[alignItems],
      flexDirection && flexDirectionStyles[flexDirection],
      { 'flex-grow': grow },
      width && widthStyles[width],
    )}
    style={{
      gap: gap && `${gap}px`,
    }}
  >
    {children}
  </div>
)

export default Flex
