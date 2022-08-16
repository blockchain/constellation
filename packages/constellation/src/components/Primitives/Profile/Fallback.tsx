import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import randomColor from 'randomcolor'
import React, { useMemo } from 'react'

import { FallbackComponent } from './Profile.types'

/**
 * The Fallback component is used to display a user's initials when no profile picture is available.
 * It uses the `randomColor` library to generate two background color based on the user's name and uses
 * those to create a gradient.
 */

const Fallback: FallbackComponent = ({ name, size }) => {
  const textSizeStyles = {
    large: 'text-5xl',
    small: 'text-[10px]',
  }

  const { gradient, initials } = useMemo(() => {
    const fullName = name.split(' ')
    const firstInitial = fullName[0][0]
    const lastInitial = fullName.length > 1 ? fullName[fullName.length - 1][0] || '' : ''

    const initials = `${firstInitial}${lastInitial}`.toUpperCase()

    const rand = Math.random()

    const angle = rand * 360
    const firstPercent = rand * 30 + 10 // between 10-40%
    const secondPercent = rand * 30 + 60 // between 70-90%

    const firstColor = randomColor({
      format: 'hex',
      luminosity: 'light',
      seed: fullName[0],
    })

    const secondColor = randomColor({
      format: 'hex',
      luminosity: 'light',
      seed: fullName[fullName.length - 1],
    })

    const gradient = `linear-gradient(${angle}deg, ${firstColor} ${firstPercent}%, ${secondColor} ${secondPercent}%)`

    return { gradient, initials }
  }, [name])

  return (
    <Avatar.Fallback
      className='flex justify-center items-center w-full h-full'
      style={{ background: gradient }}
    >
      <span className={cx('font-semibold text-black', textSizeStyles[size])}>{initials}</span>
    </Avatar.Fallback>
  )
}

export default Fallback
