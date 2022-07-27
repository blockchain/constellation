import { ComponentMeta } from '@storybook/react'
import React, { FC } from 'react'

import { Flex, FlexComponent } from '.'

export default {
  component: Flex,
  title: 'Base/Flex',
} as ComponentMeta<FlexComponent>

const GreyCircle = () => (
  <div style={{ background: 'grey', borderRadius: 12, height: 24, width: 24 }} />
)

const Text: FC = ({ children }) => <span style={{ background: 'grey' }}>{children}</span>

export const IconListItemExample = () => (
  <Flex gap={6}>
    <Flex alignItems='center' justifyContent='center'>
      <GreyCircle />
    </Flex>

    <Flex gap={6} flexDirection='column'>
      <Text>Title</Text>

      <Text>Subtitle</Text>
    </Flex>
  </Flex>
)

export const AppBarExample = () => (
  <Flex justifyContent='space-between'>
    <Flex gap={6} alignItems='center'>
      <GreyCircle />

      <span>Title</span>
    </Flex>

    <Flex gap={4}>
      <GreyCircle />
      <GreyCircle />
      <GreyCircle />
      <GreyCircle />
    </Flex>
  </Flex>
)
