import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { FC } from 'react'

import { Flex, FlexComponent } from '.'

export default {
  component: Flex,
  title: 'Base/Flex',
} as ComponentMeta<FlexComponent>

const GreyCircle: FC = ({ children }) => (
  <div className='bg-grey-500 rounded-full text-white-000 w-6 h-6 flex justify-center items-center'>
    {children}
  </div>
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

export const InteractiveFlex: ComponentStory<FlexComponent> = (args) => (
  <Flex {...args}>
    <GreyCircle>1</GreyCircle>
    <GreyCircle>2</GreyCircle>
    <GreyCircle>3</GreyCircle>
    <GreyCircle>4</GreyCircle>
  </Flex>
)
