import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { AlertCard, AlertCardComponentType } from '.'

export default {
  argTypes: {},
  args: {},
  component: AlertCard,
  title: 'Compositions/Alert/Card',
} as ComponentMeta<AlertCardComponentType>

const Template: ComponentStory<AlertCardComponentType> = ({ ...args }) => {
  return <AlertCard {...args} />
}

export const Card = Template.bind({})
