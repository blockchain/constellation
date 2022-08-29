import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import React, { useMemo } from 'react'

import genSeededGradient from '../../../utils/genSeededGradient'
import getInitials from '../../../utils/getInitials'
import { FallbackComponent } from './Profile.types'

/**
 * The Fallback component is used to display a user's initials when no profile picture is available.
 * It uses the `randomColor` library to generate two background color based on the user's name and uses
 * those to create a gradient.
 */

const Fallback: FallbackComponent = ({ name, size = 'small', storyshotOverride }) => {
  const textSizeStyles = {
    large: 'text-5xl',
    small: 'text-[10px]',
  }

  const { gradient, initials } = useMemo(() => {
    const initials = getInitials(name)
    const gradient = genSeededGradient(name, storyshotOverride)

    return { gradient, initials }
  }, [name, storyshotOverride])

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
