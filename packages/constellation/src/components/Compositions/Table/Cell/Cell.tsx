import cx from 'classnames'
import React from 'react'

const BaseCell = ({ children, prefix, postfix }) => {
  return (
    <div className='constellation flex items-center h-16 pl-4 gap-2'>
      {prefix}
      {children}
      {postfix}
    </div>
  )
}

export const TextCell = ({ text, subtext, icon, iconPosition }) => {
  return (
    <BaseCell>
      <div className='flex flex-col justify-center'>
        <span>{text}</span>
        <span>{subtext}</span>
      </div>
    </BaseCell>
  )
}
