/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import { IconNotificationOn, PaletteColors, SemanticColors } from '../../../Base'
import { CtaCard as CtaCardComponent, CtaCardComponent as CtaCardComponentProps } from '.'

export default {
  argTypes: {
    accentColor: { control: 'color' },
  },
  args: {
    border: false,
    buttonContent: 'Notify Me',
    content: 'Get a notification when Uniswap is available to trade on Blockchain.com.',
    logoBackground: PaletteColors['blue-000'],
    logoContent: {
      backgroundColor: PaletteColors['blue-000'],
      icon: IconNotificationOn,
      iconColor: SemanticColors.primary,
    },
    price: '$21.19',
    priceChange: '+$1.31 (5.22%)',
    ticker: 'UNI',
    timeframe: 'Today',
    title: 'Notify Me',
    tokenName: 'Uniswap',
    variant: 'default',
  },
  component: CtaCardComponent,
  title: 'Compositions/Cards/CtaCard',
} as ComponentMeta<CtaCardComponentProps>

const Template: CtaCardComponentProps = (args) => {
  return <CtaCardComponent {...args} />
}

export const CtaCard = Template.bind({})
