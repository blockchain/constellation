import * as Avatar from '@radix-ui/react-avatar'
import cx from 'classnames'
import React, { forwardRef } from 'react'

import Fallback from './Fallback'
import { ProfileComponent, ProfileProps } from './Profile.types'

/**
 * The Profile displays a user's profile picture or initials along with a background gradient.
 *
 * Profile utilizes the `@radix-ui/react-avatar` library to display the user's profile picture
 * and handle fallbacks.
 *
 * When a `ref` prop is provided, it will be forwarded to the root element. Any
 * other properties supplied will be provided to the root element (ie, the `as`
 * prop value). This includes all appropriate HTML attributes or aria tags. This
 * component may have its underlying DOM customized via the 'as' prop.
 */

const Profile: ProfileComponent = forwardRef(
  <T extends React.ElementType = 'button'>(
    { as, imgSrc, name, size = 'small', storyshotOverride, ...otherProps }: ProfileProps<T>,
    ref?: PolymorphicRef<T>,
  ) => {
    const sizeStyles = {
      large: `w-[124px] h-[124px]`,
      small: 'w-6 h-6',
    }

    const Component = as || 'button'

    return (
      <Component
        className={cx(
          'constellation flex relative rounded-full overflow-hidden outline outline-0 outline-overlay-dark-200 hover:outline-2 active:outline-2 p-0 no-underline cursor-pointer',
          sizeStyles[size],
        )}
        ref={ref}
        {...otherProps}
      >
        <Avatar.Root asChild>
          <>
            <Avatar.Image src={imgSrc} alt={name} className='w-full h-full' />
            <Fallback size={size} name={name} storyshotOverride={storyshotOverride} />
          </>
        </Avatar.Root>
      </Component>
    )
  },
)

export default Profile
