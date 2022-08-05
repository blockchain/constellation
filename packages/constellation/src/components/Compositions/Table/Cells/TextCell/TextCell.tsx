import cx from 'classnames'
import React from 'react'

import { BaseCell } from '../'
import { TextCellComponentType } from '.'

const TextCell: TextCellComponentType = ({
  icon,
  iconPosition,
  isFooter,
  isHeader,
  subtext,
  text,
}) => {
  return (
    <BaseCell
      isFooter={isFooter}
      isHeader={isHeader}
      prefix={iconPosition === 'left' && icon}
      postfix={iconPosition === 'right' && icon}
    >
      <div className='flex flex-col justify-center'>
        <span className='text-title text-sm'>{text}</span>
        <span
          className={cx('text-body mode-light:text-background-dark text-sm', {
            'mode-light:!text-grey-600 mode-dark:!text-grey-400': isHeader,
          })}
        >
          {subtext}
        </span>
      </div>
    </BaseCell>
  )
}

export default TextCell
