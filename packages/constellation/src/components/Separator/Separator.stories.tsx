import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Separator, SeparatorComponent } from 'components'
import React from 'react'

export default {
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      description: 'Separate the content vertically or horizontally.',
      options: ['horizontal', 'vertical'],
    },
  },
  component: Separator,
  title: 'Components/Separator',
} as ComponentMeta<SeparatorComponent>

const Template: ComponentStory<SeparatorComponent> = (args) => <Separator {...args} />

export const Default = Template.bind({})
Default.args = {}
