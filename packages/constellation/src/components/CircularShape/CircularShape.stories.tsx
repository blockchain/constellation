import { IconActivity } from '@blockchain-com/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CircularShape, CircularShapeComponent, Flex } from 'components'
import { Icon } from 'components/Icon'
import React from 'react'
import { convertHexToRGBA } from 'utils'

export default {
  argTypes: {
    color: {
      control: { type: 'color' },
      defaultValue: 'orange',
    },
    size: {
      defaultValue: 4,
    },
  },
  component: CircularShape,
  title: 'Components/CircularShape',
} as ComponentMeta<CircularShapeComponent>

const Template: ComponentStory<CircularShapeComponent> = (args) => <CircularShape {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: (
    <Flex alignItems='center' justifyContent='center'>
      <Icon label='' color='#FF9B22'>
        <IconActivity />
      </Icon>
    </Flex>
  ),
  color: convertHexToRGBA('#FF9B22', 0.15),
}
