import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { WalletSwitcher as WalletSwitcherComponent, WalletSwitcherComponentType } from '.'

export default {
  argTypes: {},
  args: {
    id: '14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd',
    status: 'success',
    ticker: 'BTC',
  },
  component: WalletSwitcherComponent,
  title: 'Compositions/Switcher/WalletSwitcher',
} as ComponentMeta<WalletSwitcherComponentType>

const Template: ComponentStory<WalletSwitcherComponentType> = ({ ...args }) => {
  return <WalletSwitcherComponent {...args} />
}

export const WalletSwitcher = Template.bind({})
