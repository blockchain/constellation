import cx from 'classnames'
import React, { useMemo } from 'react'

import {
  IconBlockchainLogo,
  IconNotificationOn,
  IconPresent,
  SemanticColors,
  Text,
} from '../../Base'
import { Button, Divider, IconButton, Tabs } from '../../Primitives'
import { NavigationComponent } from './Navigation.types'
import NavigationTab from './NavigationTab'

/**
 * Navigation is a component that displays a set of page indicators and arrows to
 * navigate between pages.
 */

const Navigation: NavigationComponent = ({
  navigationTabs,
  onNotificationClick,
  onRefferalClick,
  primaryButton,
  secondaryButton,
  title,
}) => {
  const tabs = useMemo(() => {
    return navigationTabs.map(({ dot, key, label }) => ({
      key,
      titleContent: <NavigationTab text={label} dot={dot} />,
    }))
  }, [navigationTabs])

  return (
    <div className='constellation flex flex-row items-center justify-between h-14 pl-6 pr-4 w-full bg-background'>
      <div className='flex flex-row items-center'>
        <IconBlockchainLogo size='medium' />
        <Text variant='title3' className='ml-2 mr-8' color={SemanticColors.title}>
          {title}
        </Text>
        <Tabs tabs={tabs} defaultActiveTab='home' size='small' variant='minimal' />
      </div>
      <div className='flex flex-row items-center gap-2'>
        {primaryButton?.text && <Button {...primaryButton} size='small' />}
        {secondaryButton?.text && <Button variant='minimal' size='small' {...secondaryButton} />}
        {onNotificationClick && (
          <IconButton
            onClick={onNotificationClick}
            icon={<IconNotificationOn />}
            size='default'
            className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 ml-4 hover:text-grey-600 transition-colors'
          />
        )}
        {onRefferalClick && (
          <IconButton
            onClick={onRefferalClick}
            icon={<IconPresent />}
            size='default'
            className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 hover:text-grey-600 transition-colors'
          />
        )}
        <Divider orientation='vertical' variant='subtle' className='!h-4 mx-2' />
        <div className='w-8 h-8 bg-medium rounded-full flex justify-center items-center'>EM</div>
      </div>
    </div>
  )
}

export default Navigation
