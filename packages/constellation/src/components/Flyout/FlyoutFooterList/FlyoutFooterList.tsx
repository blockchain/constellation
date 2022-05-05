import { Flex } from 'components/Flex'
import { Padding } from 'components/Padding'
import React from 'react'

import { FlyoutFooterListComponent } from './FlyoutFooterList.types'

const FlyoutFooterList: FlyoutFooterListComponent = ({ children }) => {
  return (
    <Padding all={2}>
      <Flex flexDirection='column' gap={0.5}>
        {children}
      </Flex>
    </Padding>
  )
}

export default FlyoutFooterList
