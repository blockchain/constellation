import cx from 'classnames'
import React from 'react'

import { IconBlockchainLogo, SemanticColors, Text } from '../../Base'
import { NavigationComponent } from './Navigation.types'

/**
 * Navigation is a component that displays a set of page indicators and arrows to
 * navigate between pages.
 */

const Navigation: NavigationComponent = ({ title }) => {
  return (
    <div className='constellation flex flex-row items-center h-14 pl-6 pr-4 w-full bg-background-light'>
      <IconBlockchainLogo size='medium' />
      <Text variant='title3' className='ml-2 mr-6' color={SemanticColors.title}>
        {title}
      </Text>
    </div>
  )
}

export default Navigation
