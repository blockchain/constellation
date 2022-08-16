import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import _ from 'lodash'
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

    const regex = new RegExp('white|overlay|dark|grey|transparent|800|900|000|tiers|gold')
    const colors = Object.keys(PaletteColors).filter((color) => !regex.test(color))

    const firstColorKey = _.sample(colors) as keyof typeof PaletteColors
    const secondColorKey = _.sample(colors) as keyof typeof PaletteColors

    return `linear-gradient(${angle}deg, ${PaletteColors[firstColorKey]} ${firstPercent}%, ${PaletteColors[secondColorKey]} ${secondPercent}%)`
  }, [])

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
