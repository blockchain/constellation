import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import _ from 'lodash'
import randomColor from 'randomcolor'
import React, { useMemo } from 'react'

import { PaletteColors } from '../../Base'
import { FallbackComponent } from './Profile.types'

const Fallback: FallbackComponent = ({ name, size }) => {
  const textSizeStyles = {
    large: 'text-5xl',
    small: 'text-[10px]',
  }

  const initials = useMemo(() => {
    const fullName = name.split(' ')
    const firstInitial = fullName[0][0]
    const lastInitial = fullName.length > 1 ? fullName[fullName.length - 1][0] || '' : ''

    return `${firstInitial}${lastInitial}`.toUpperCase()
  }, [name])

  const gradient = useMemo(() => {
    const angle = Math.random() * 360
    const firstPercent = Math.random() * 30 + 10
    const secondPercent = Math.random() * 30 + 60

    const [firstColor, secondColor] = randomColor({
      count: 2,
      format: 'rgb',
      luminosity: 'light',
      seed: name,
    })

    return `linear-gradient(${angle}deg, ${firstColor} ${firstPercent}%, ${secondColor} ${secondPercent}%)`
  }, [name])

  return (
    <Avatar.Fallback
      className='flex justify-center items-center w-full h-full'
      style={{ background: gradient }}
    >
      <span className={cx('font-semibold', textSizeStyles[size])}>{initials}</span>
    </Avatar.Fallback>
  )
}

export default Fallback
