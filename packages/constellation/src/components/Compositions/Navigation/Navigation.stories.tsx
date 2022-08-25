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
    onRefferalClick: { action: 'onRefferalClick' },
  },
  args: {
    navigationTabs: [
      { key: 'home', label: 'Home' },
      { key: 'prices', label: 'Prices' },
      { dot: true, key: 'rewards', label: 'Rewards' },
      { key: 'dex', label: 'DEX' },
      { key: 'card', label: 'Card' },
    ],
    primaryButton: {
      onClick: () => action('primaryButton.onClick')(),
      text: 'Buy / Sell',
    },
    secondaryButton: {
      onClick: () => action('secondaryButton.onClick')(),
      text: 'Send / Receive',
    },
    title: 'Wallet',
  },
  component: NavigationComponent,
  title: 'Compositions/Navigation',
} as ComponentMeta<NavigationComponentType>

const Template: ComponentStory<NavigationComponentType> = (args) => {
  return <NavigationComponent {...args} />
}

export const Navigation = Template.bind({})
