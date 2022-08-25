import cx from 'classnames'
import React from 'react'

import {
  IconBlockchainLogo,
  IconNotificationOn,
  IconPresent,
  SemanticColors,
  Text,
} from '../../Base'
import { Button, Divider, IconButton, Tabs } from '../../Primitives'
import { NavigationComponent } from './Navigation.types'

/**
 * Navigation is a component that displays a set of page indicators and arrows to
 * navigate between pages.
 */

const Navigation: NavigationComponent = ({ title }) => {
  return (
    <div className='constellation flex flex-row items-center justify-between h-14 pl-6 pr-4 w-full bg-background'>
      <div className='flex flex-row items-center'>
        <IconBlockchainLogo size='medium' />
        <Text variant='title3' className='ml-2 mr-8' color={SemanticColors.title}>
          {title}
        </Text>
        <Tabs
          tabs={[
            { key: 'home', titleContent: 'Home' },
            { key: 'prices', titleContent: 'Prices' },
            { key: 'rewards', titleContent: 'Rewards' },
            { key: 'dex', titleContent: 'DEX' },
            { key: 'card', titleContent: 'Card' },
          ]}
          defaultActiveTab='home'
          size='small'
          variant='minimal'
        />
      </div>
      <div className='flex flex-row items-center gap-2'>
        <Button text='Buy / Sell' size='small' />
        <Button text='Send / Receive' variant='minimal' size='small' />
        <IconButton
          icon={<IconNotificationOn />}
          size='default'
          className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 ml-4 hover:text-grey-600'
        />
        <IconButton
          icon={<IconPresent />}
          size='default'
          className='!bg-background-light border-none rounded-full !h-fit !p-2 text-grey-400 hover:text-grey-600'
        />
        <Divider orientation='vertical' variant='distinct' className='!h-4 mx-2' />
        <div className='w-8 h-8 bg-medium rounded-full flex justify-center items-center'>EM</div>
      </div>
    </div>
  )
}

export default Navigation
