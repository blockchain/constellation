import React from 'react'

import { SemanticColors, Text } from '../../../Base'
import { Card } from '../Card'
import { CtaCardComponent } from './CtaCard.types'

const CtaCard: CtaCardComponent = ({
  price,
  priceChange,
  ticker,
  timeframe,
  tokenName,
  variant,
  ...cardProps
}) => {
  const isAnnouncement = variant === 'announcement'

  const Header = () => {
    return (
      <div>
        <Text variant='caption2' color={SemanticColors.title}>
          {price ? `1 ${ticker} = ${price}` : `${tokenName} (${ticker})`}
        </Text>
        {price && (
          <div>
            <Text variant='caption2' className='text-green-400'>
              {priceChange}
            </Text>
            <Text variant='caption2' className='text-grey-300 ml-1'>
              {timeframe}
            </Text>
          </div>
        )}
      </div>
    )
  }

  return (
    <Card
      {...cardProps}
      button
      header={isAnnouncement && <Header />}
      variant={variant === 'announcement' ? 'cta' : variant}
      className='flex-col !items-start'
    />
  )
}

export default CtaCard
