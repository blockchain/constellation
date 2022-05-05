import { IconClose } from '@blockchain-com/icons'
import { CircularShape } from 'components/CircularShape'
import { Flex } from 'components/Flex'
import { FlexGrow } from 'components/FlexGrow'
import { Icon } from 'components/Icon'
import { Padding } from 'components/Padding'
import React from 'react'
import { PXToRem } from 'utils'

import { colors } from '../../../colors'
import { FlyoutHeaderComponent } from './FlyoutHeader.types'

const FlyoutHeader: FlyoutHeaderComponent = ({ children }) => {
  return (
    <Padding horizontal={PXToRem(40)} vertical={PXToRem(32)}>
      <Flex gap={PXToRem(20)} alignItems='center'>
        <FlexGrow>{children}</FlexGrow>

        <CircularShape color={colors.grey050} size={PXToRem(32)}>
          <Icon label='close' color='primary'>
            <IconClose />
          </Icon>
        </CircularShape>
      </Flex>
    </Padding>
  )
}

export default FlyoutHeader
