import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import {
  Navigation as NavigationComponent,
  NavigationComponent as NavigationComponentType,
} from '.'

export default {
  argTypes: {
    onNotificationClick: { action: 'onNotificationClick' },
    onReferralClick: { action: 'onReferralClick' },
  },
  args: {
    defaultSelected: 'home',
    dropdownCtaButton: {
      onClick: () => action('dropdownCtaButton.onClick')(),
    },
    dropdownSecondSectionItems: [
      { key: 'general', label: 'General' },
      { key: 'security', label: 'Security' },
      { key: 'trading limits', label: 'Trading Limits' },
      { key: 'preferences', label: 'Preferences' },
      { key: 'wallets&addresses', label: 'Wallets & Addresses' },
    ],
    dropdownSecondSectionSeparator: {
      key: 'account',
      label: 'Account',
    },
    navigationTabs: [
      { key: 'home', label: 'Home' },
      { key: 'prices', label: 'Prices' },
      { dot: true, key: 'rewards', label: 'Rewards' },
      { key: 'dex', label: 'DEX' },
      { key: 'card', label: 'Card' },
    ],
    onSelectedChange: (selected: string) => action('onSelectedChange')(selected),
    primaryButton: {
      onClick: () => action('primaryButton.onClick')(),
      text: 'Buy / Sell',
    },
    secondaryButton: {
      onClick: () => action('secondaryButton.onClick')(),
      text: 'Send / Receive',
    },
    title: 'Wallet',
    user: {
      name: 'John Doe',
      onClick: () => action('user.onClick')(),
    },
  },
  component: NavigationComponent,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Compositions/Navigation',
} as ComponentMeta<NavigationComponentType>

const Template: ComponentStory<NavigationComponentType> = (args) => {
  return <NavigationComponent {...args} />
}

export const Navigation = Template.bind({})
