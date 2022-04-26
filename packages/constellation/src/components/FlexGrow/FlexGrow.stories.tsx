import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex } from 'components/Flex'
import { Padding } from 'components/Padding'
import React, { FC } from 'react'

import { FlexGrow, FlexGrowComponent } from '.'

export default {
  component: FlexGrow,
  title: 'Components/FlexGrow',
} as ComponentMeta<FlexGrowComponent>

const Box: FC<{ color: string }> = ({ children, color }) => (
  <div style={{ background: color, color: 'white' }}>
    <Padding all={16}>{children}</Padding>
  </div>
)

export const GrowElementVertically = () => {
  return (
    <Flex flexDirection='column' style={{ height: 600, width: 300 }}>
      <Padding all={16} style={{ background: 'red', color: 'white' }}>
        Header
      </Padding>

      <FlexGrow style={{ background: 'green', color: 'white' }}>
        <Padding all={16}>Content</Padding>
      </FlexGrow>

      <Padding all={16} style={{ background: 'blue', color: 'white' }}>
        Footer
      </Padding>
    </Flex>
  )
}

export const GrowMultipleElementsVertically = () => {
  return (
    <Flex flexDirection='column' style={{ height: 600, width: 300 }}>
      <Padding all={16} style={{ background: 'red', color: 'white' }}>
        Header
      </Padding>

      <FlexGrow grow={1} style={{ background: 'green', color: 'white' }}>
        <Padding all={16}>Content</Padding>
      </FlexGrow>

      <FlexGrow grow={1} style={{ background: 'blue', color: 'white' }}>
        <Padding all={16}>Footer</Padding>
      </FlexGrow>
    </Flex>
  )
}

export const GrowElementHorizontally = () => {
  return (
    <Flex style={{ height: 600, width: 800 }}>
      <Padding all={16} style={{ background: 'red', color: 'white' }}>
        Column 1
      </Padding>

      <FlexGrow style={{ background: 'green', color: 'white' }}>
        <Padding all={16}>Column 2</Padding>
      </FlexGrow>

      <Padding all={16} style={{ background: 'blue', color: 'white' }}>
        Column 3
      </Padding>
    </Flex>
  )
}

export const GrowMultipleElementsHorizontally = () => {
  return (
    <Flex style={{ height: 600, width: 800 }}>
      <Padding all={16} style={{ background: 'red', color: 'white' }}>
        Column 1
      </Padding>

      <FlexGrow grow={1} style={{ background: 'green', color: 'white' }}>
        <Padding all={16}>Column 2</Padding>
      </FlexGrow>

      <FlexGrow grow={1} style={{ background: 'blue', color: 'white' }}>
        <Padding all={16}>Column 3</Padding>
      </FlexGrow>
    </Flex>
  )
}
