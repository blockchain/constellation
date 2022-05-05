import { ClickableArea } from 'components/ClickableArea'
import { Flex } from 'components/Flex'
import { FlexGrow } from 'components/FlexGrow'
import { Padding } from 'components/Padding'
import { Text } from 'components/Text'
import React from 'react'
import { PXToRem } from 'utils'

import { FlyoutListItemComponent } from './FlyoutListItem.types'

const FlyoutListItem: FlyoutListItemComponent = ({ endIcon, icon, onClick, subtitle, title }) => {
  return (
    <ClickableArea onClick={onClick}>
      <Padding vertical={1.5} horizontal={2}>
        <Flex gap={PXToRem(16)} alignItems='center'>
          {icon}

          <FlexGrow>
            <Flex gap={PXToRem(2)} flexDirection='column'>
              <Text fontWeigth='semibold' fontSize={1} lineHeight={1.5} color='primary'>
                {title}
              </Text>

              {!!subtitle && (
                <Text
                  fontWeigth='regular'
                  fontSize={PXToRem(14)}
                  lineHeight={PXToRem(20)}
                  color='secondary'
                >
                  {subtitle}
                </Text>
              )}
            </Flex>
          </FlexGrow>

          {endIcon}
        </Flex>
      </Padding>
    </ClickableArea>
  )
}

export default FlyoutListItem
