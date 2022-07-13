import classnames from 'classnames'
import React, { useState } from 'react'

import { IconVisibilityOff, IconVisibilityOn } from '../..'
import { InputComponent } from './Input.types'

const Input: InputComponent = ({
  disabled,
  helperText = '',
  id,
  label = '',
  password,
  placeholder,
  prefix,
  state,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='constellation'>
      <label className='text-sm text-title select-none' htmlFor={id}>
        {label}
      </label>
      <div
        className={classnames(
          'h-12 pl-4 rounded-lg flex border items-center focus-within:border-primary',
          {
            'bg-background-light border-background-light': !disabled,
            'bg-medium border-medium': disabled,
            'border-error': state === 'error',
            'border-success': state === 'success',
          },
        )}
      >
        {prefix?.length ? (
          <span className='text-muted mr-4 text-sm select-none'>{prefix}</span>
        ) : null}
        <input
          id={label}
          className={classnames(
            'text-title placeholder:text-muted h-full flex-grow bg-transparent outline-none border-none',
            { 'text-muted': disabled },
          )}
          placeholder={placeholder}
          disabled={disabled}
          type={password && !showPassword ? 'password' : 'text'}
        />
        {password && (
          <button
            className='mr-4 pl-2 outline-none border-none bg-transparent flex items-center justify-center'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IconVisibilityOn height={20} width={24} color='#98A1B2' />
            ) : (
              <IconVisibilityOff height={20} width={24} color='#98A1B2' />
            )}
          </button>
        )}
      </div>
      <span
        className={classnames('text-xs text-body mt-1 select-none', {
          'text-error': state === 'error',
          'text-success': state === 'success',
        })}
      >
        {helperText}
      </span>
    </div>
  )
}

export default Input
