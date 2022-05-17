import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { CircularProgressIndicator, CircularProgressIndicatorComponent } from '.'

export default {
  component: CircularProgressIndicator,
  title: 'Components/ProgressIndicator/CircularProgressIndicator',
} as ComponentMeta<CircularProgressIndicatorComponent>

const Template: ComponentStory<CircularProgressIndicatorComponent> = (args) => (
  <CircularProgressIndicator {...args} />
)

export const Default = Template.bind({})
Default.args = {}
