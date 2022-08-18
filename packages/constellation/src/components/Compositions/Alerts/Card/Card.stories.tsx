import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { AlertCard, AlertCardComponentType } from '.'

export default {
  argTypes: {
    onCloseClick: {
      action: 'onCloseClick',
    },
  },
  args: {
    content:
      'Card alert copy that directs the user to take an action or let’s them know what happened.',
    title: 'Card Alert Title',
  },
  component: AlertCard,
  title: 'Compositions/Alert/Card',
} as ComponentMeta<AlertCardComponentType>

const Template: ComponentStory<AlertCardComponentType> = ({ ...args }) => {
  return <AlertCard {...args} />
}

export const Card = Template.bind({})
