import { IconActivity } from '@blockchain-com/icons'
import { colors } from 'colors'
import {
  CircularShape,
  Flex,
  FlyoutHeader,
  FlyoutScaffold,
  Icon,
  Padding,
  Typography,
} from 'components'
import React, { FC } from 'react'
import { useTheme } from 'theme'

const InfoTradingAccountSheet: FC = () => {
  const theme = useTheme()

  return (
    <FlyoutScaffold header={<FlyoutHeader />}>
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        style={{ height: '100%' }}
      >
        <Padding horizontal={2} vertical={1.5}>
          <Flex flexDirection='column' alignItems='center' gap={1.25}>
            <CircularShape color={colors.blue600} size={3}>
              <Icon label='' color={theme.background.colors.default}>
                <IconActivity />
              </Icon>
            </CircularShape>

            <Flex alignItems='center' flexDirection='column'>
              <Typography.Title3>Trading Account</Typography.Title3>

              <Typography.Paragraph1 textAlign='center' color='secondary'>
                Your Trading Account is a custodial wallet hosted by Blockchain.com. Your trading
                account allows you to trade with cheaper fees and buy and sell crypto in seconds.
              </Typography.Paragraph1>
            </Flex>
          </Flex>
        </Padding>
      </Flex>
    </FlyoutScaffold>
  )
}

export default InfoTradingAccountSheet
