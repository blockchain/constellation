import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import TransactionsCard from './TransactionsCard'

export default {
  component: TransactionsCard,
  title: 'Labs/Cards/TransactionsCard',
} as ComponentMeta<typeof TransactionsCard>

export const Preview: ComponentStory<typeof TransactionsCard> = (args) => {
  return <TransactionsCard {...args} />
}
