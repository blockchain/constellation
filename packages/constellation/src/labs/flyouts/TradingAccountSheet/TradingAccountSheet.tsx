import { IconArrowUpRight, IconChevronRight, IconMinus } from '@blockchain-com/icons'
import {
  CircularShape,
  Flex,
  FlyoutFooterList,
  FlyoutHeader,
  FlyoutListItem,
  FlyoutScaffold,
  Icon,
  Padding,
  PrimaryButton,
  SecondaryButton,
  SeparatedList,
  Separator,
  Typography,
} from 'components'
import React, { FC } from 'react'

export const TradingAccountSheet: FC = () => {
  return (
    <FlyoutScaffold
      header={
        <FlyoutHeader>
          <Flex alignItems='center' gap={1}>
            <CircularShape color='#FF9B22' size={2}>
              <Icon label='' color='white'>
                <IconArrowUpRight />
              </Icon>
            </CircularShape>

            <Typography.Title3>Trading Account</Typography.Title3>
          </Flex>
        </FlyoutHeader>
      }
      footer={
        <FlyoutFooterList>
          <PrimaryButton title='Add BTC' />

          <SecondaryButton title='Withdraw' />
        </FlyoutFooterList>
      }
    >
      <SeparatedList includeEndSeparator separatorBuilder={() => <Separator />}>
        <Padding horizontal={2} bottom={1.5}>
          <Flex flexDirection='column' gap={0.5}>
            <Typography.Body2>$201.20</Typography.Body2>

            <Typography.Paragraph1 color='secondary'>0.00000093 BTC</Typography.Paragraph1>
          </Flex>
        </Padding>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((index) => (
          <FlyoutListItem
            key={index}
            onClick={() => null}
            icon={
              <CircularShape color='#FF9B22' size={2}>
                <Icon label='' color='white' size='small'>
                  <IconMinus />
                </Icon>
              </CircularShape>
            }
            title='Sell'
            subtitle='Convert Your Crypto to Cash'
            endIcon={
              <Icon label='' color='primary'>
                <IconChevronRight />
              </Icon>
            }
          />
        ))}
      </SeparatedList>
    </FlyoutScaffold>
  )
}
