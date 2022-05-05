import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch, SwitchComponent } from 'components'
import React from 'react'

export default {
  component: Switch,
  title: 'Components/Switch',
} as ComponentMeta<SwitchComponent>

const Template: ComponentStory<SwitchComponent> = (args) => <Switch {...args} />

export const Default = Template.bind({})
