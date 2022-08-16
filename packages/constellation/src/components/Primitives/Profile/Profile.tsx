import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import React from 'react'

import Fallback from './Fallback'
import { ProfileComponent } from './Profile.types'

const Profile: ProfileComponent = ({ active, imgSrc, name, size }) => {
  const sizeStyles = {
    large: `w-[124px] h-[124px]`,
    small: 'w-6 h-6',
  }

  return (
    <Avatar.Root
      className={cx('constellation flex relative rounded-full overflow-hidden', sizeStyles[size], {
        'outline outline-2 outline-overlay-dark-200': active,
      })}
    >
      <Avatar.Image src={imgSrc} alt={name} className='w-full h-full' />
      <Fallback size={size} name={name} />
    </Avatar.Root>
  )
}

export default Profile
