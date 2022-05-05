import { Background } from 'components/Background'
import { Flex } from 'components/Flex'
import { ScrollableArea } from 'components/ScrollableArea'
import React from 'react'

import { FlyoutScaffoldComponent } from './FlyoutScaffold.types'

const FlyoutScaffold: FlyoutScaffoldComponent = ({ children, footer, header }) => {
  return (
    <Background color='default'>
      <Flex flexDirection='column' style={{ height: '100%', maxHeight: '100%' }}>
        {header}

        <ScrollableArea>{children}</ScrollableArea>

        {footer}
      </Flex>
    </Background>
  )
}

export default FlyoutScaffold
