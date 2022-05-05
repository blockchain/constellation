import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, ScrollableArea, ScrollableAreaComponent, Typography } from 'components'
import React from 'react'

export default {
  component: ScrollableArea,
  title: 'Components/ScrollableArea',
} as ComponentMeta<ScrollableAreaComponent>

const Template: ComponentStory<ScrollableAreaComponent> = (args) => (
  <div style={{ height: 200, width: 200 }}>
    <ScrollableArea {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
    <Flex key={index}>
      <Typography.Body1>Hello</Typography.Body1>
    </Flex>
  )),
}
