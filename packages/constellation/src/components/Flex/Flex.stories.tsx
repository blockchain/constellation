import { ComponentMeta } from '@storybook/react'
import { FlexGrow } from 'components/FlexGrow'
import React, { FC } from 'react'

import { Flex, FlexComponent } from '.'

const flexStory: ComponentMeta<FlexComponent> = {
  component: Flex,
  title: 'Components/Flex',
}

const GreyCircle = () => (
  <div style={{ background: 'grey', borderRadius: 12, height: 24, width: 24 }} />
)

const Text: FC = ({ children }) => <span style={{ background: 'grey' }}>{children}</span>

export const IconListItemExample = () => {
  return (
    <Flex gap={6}>
      <Flex alignItems='center' justifyContent='center'>
        <GreyCircle />
      </Flex>

      <FlexGrow>
        <Flex gap={6} flexDirection='column'>
          <Text>Title</Text>

          <Text>Subtitle</Text>
        </Flex>
      </FlexGrow>
    </Flex>
  )
}

export const AppBarExample = () => {
  return (
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
}

export default flexStory
