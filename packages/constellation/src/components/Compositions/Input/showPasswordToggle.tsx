import classnames from 'classnames'
import React from 'react'

import { IconVisibilityOff, IconVisibilityOn, PaletteColors } from '../../Base'
import { ShowPasswordProps } from './Input.types'

const ShowPasswordToggle = ({ disabled, onClick, showPassword }: ShowPasswordProps) => (
  <button
    className={classnames(
      'outline-none border-none bg-transparent flex items-center justify-center cursor-pointer',
      { '!cursor-not-allowed': disabled },
    )}
    onClick={onClick}
    disabled={disabled}
    aria-label='show password toggle'
  >
    {showPassword ? (
      <IconVisibilityOn height={20} width={24} color={PaletteColors['grey-400']} />
    ) : (
      <IconVisibilityOff height={20} width={24} color={PaletteColors['grey-400']} />
    )}
  </button>
)

export default ShowPasswordToggle
