import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { WalletSwitcher as WalletSwitcherComponent, WalletSwitcherComponentType } from '.'

export default {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    status: {
      control: {
        options: ['error', 'success', 'warning'],
        type: 'radio',
      },
    },
  },
  args: {
    id: '14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd',
    status: 'success',
    ticker: 'BTC',
  },
  component: WalletSwitcherComponent,
  title: 'Primitives/Switcher/WalletSwitcher',
} as ComponentMeta<WalletSwitcherComponentType>

const Template: ComponentStory<WalletSwitcherComponentType> = ({ ...args }) => {
  return <WalletSwitcherComponent {...args} />
}

export const WalletSwitcher = Template.bind({})
