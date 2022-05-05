import { IconChevronRight, IconMinus } from '@blockchain-com/icons'
import {
  Background,
  CircularShape,
  Flex,
  FlyoutListItem,
  Icon,
  LoadingArea,
  LoadingSpinner,
  Padding,
  PrimaryButton,
  SeparatedList,
  Typography,
} from 'components'
import React, { FC } from 'react'
import { useTheme } from 'theme'

const TransactionsCard: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const theme = useTheme()

  return (
    <Background>
      <Flex gap={1.5} flexDirection='column'>
        <Padding left={1} top={0.5} right={0.5}>
          <Flex alignItems='center' justifyContent='space-between'>
            <Typography.Title3>Activity</Typography.Title3>

            <Flex gap={0.5}>
              <PrimaryButton title='Download' />
              <PrimaryButton title='Download' />
            </Flex>
          </Flex>
        </Padding>

        <LoadingArea
          isLoading={isLoading}
          icon={<LoadingSpinner color={theme.button.primary.loadingSpinner.color} size={2} />}
        >
          <div style={{ minHeight: '200rem' }}>
            {!isLoading ? (
              <SeparatedList>
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
            ) : null}
          </div>
        </LoadingArea>
      </Flex>
    </Background>
  )
}

export default TransactionsCard
