import classnames from 'classnames'
import React, { forwardRef, useState } from 'react'

import { IconVisibilityOff, IconVisibilityOn } from '../..'
import { InputProps } from './Input.types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      helperText = '',
      id,
      label = '',
      placeholder,
      prefix,
      state,
      type = 'text',
      ...args
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'

    return (
      <div className='constellation'>
        <label className='text-sm text-title select-none' htmlFor={id}>
          {label}
        </label>
        <div
          className={classnames(
            'h-12 rounded-lg flex border border-solid items-center focus-within:border-primary', // TODO remove border-solid when preflight workaround is in
            {
              'bg-background-light border-background-light': !disabled,
              'bg-medium border-medium': disabled,
              'border-error': state === 'error',
              'border-success': state === 'success',
              'border-warning': state === 'warning',
            },
          )}
        >
          {prefix?.length ? (
            <label className='text-muted text-sm select-none pl-4' htmlFor={id}>
              {prefix}
            </label>
          ) : null}
          <input
            ref={ref}
            {...args}
            id={id}
            className={classnames(
              'text-title placeholder:text-muted h-full pl-4 flex-grow bg-transparent outline-none border-none',
              { 'text-muted': disabled },
            )}
            placeholder={placeholder}
            disabled={disabled}
            type={isPassword && !showPassword ? 'password' : 'text'}
          />
          {isPassword && ( // TODO: replace with postfix prop
            <button
              className='mr-4 pl-2 outline-none border-none bg-transparent flex items-center justify-center cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IconVisibilityOn height={20} width={24} color='#98A1B2' /> // TODO: Replace with icon buttons and update colours
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
            'text-warning': state === 'warning',
          })}
        >
          {helperText}
        </span>
      </div>
    )
  },
)

export default Input
