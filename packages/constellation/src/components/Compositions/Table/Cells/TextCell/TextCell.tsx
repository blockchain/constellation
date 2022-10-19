import cx from 'classnames'
import React from 'react'

import { Flex } from '../../../../Base'
import { BaseCell } from '../BaseCell'
import { TextCellComponentType } from '.'

/**
 * TextCell extends the BaseCell component and displays one or two lines text in a table.
 * TextCell can also display and icon alongside the text.
 */

const TextCell: TextCellComponentType = ({
  icon,
  iconPosition,
  isHeader,
  subtext,
  tag,
  tagPosition,
  text,
  ...baseProps
}) => {
  return (
    <BaseCell isHeader={isHeader} {...baseProps}>
      <Flex
        alignItems='center'
        gap={4}
        justifyContent={tagPosition === 'left' ? 'flex-start' : 'space-between'}
      >
        {tagPosition === 'left' && tag}
        <div className='flex flex-row items-center h-full gap-2'>
          {iconPosition === 'left' && icon}
          <div className='flex flex-col justify-center items-start h-full'>
            <span className='text-title text-sm'>{text}</span>
            <span
              className={cx('text-body mode-light:text-background-dark text-sm', {
                'mode-light:!text-grey-600 mode-dark:!text-grey-400': isHeader,
              })}
            >
              {subtext}
            </span>
          </div>
          {iconPosition === 'right' && icon}
        </div>
        {tagPosition === 'right' && tag}
      </Flex>
    </BaseCell>
  )
}

export default TextCell
